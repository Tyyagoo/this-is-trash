package com.tyyagoo.translationmetrics.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.tyyagoo.translationmetrics.model.TranslationEvent;
import lombok.Data;
import org.springframework.data.domain.Range;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class TranslationEventDto {

    @Data @JsonNaming(value = PropertyNamingStrategies.SnakeCaseStrategy.class)
    public static class Unique {

        private String translationId;
        private String timestamp;
        private String sourceLanguage;
        private String targetLanguage;
        private String clientName;
        private String eventName;
        private int duration;
        @JsonProperty("nr_words")
        private int numberOfWords;

        public TranslationEvent toModel() {
            var event = new TranslationEvent();

            event.setTranslationId(translationId);
            event.setSourceLanguage(sourceLanguage);
            event.setTargetLanguage(targetLanguage);
            event.setClientName(clientName);
            event.setDuration(duration);
            event.setNumberOfWords(numberOfWords);

            event.setTimestamp(LocalDateTime.parse(timestamp, DateTimeFormatter.ISO_LOCAL_DATE_TIME));

            return event;
        }

        static public Unique fromModel(TranslationEvent model) {
            var unique = new Unique();

            unique.setTranslationId(model.getTranslationId());
            unique.setSourceLanguage(model.getSourceLanguage());
            unique.setTargetLanguage(model.getTargetLanguage());
            unique.setClientName(model.getClientName());
            unique.setDuration(model.getDuration());
            unique.setNumberOfWords(model.getNumberOfWords());

            unique.setTimestamp(model.getTimestamp().toString());

            return unique;
        }
    }

    @Data
    public static class Average {
        private String start;
        private String end;

        @JsonProperty("average_delivery_time")
        private double averageDeliveryTime;

        static public Mono<Average> fromEventFlux(Range<String> range, Flux<TranslationEvent> flux) {
            var avg = new Average();

            range.getLowerBound()
                    .getValue()
                    .ifPresentOrElse(avg::setStart, () -> avg.setStart(""));

            range.getUpperBound()
                    .getValue()
                    .ifPresentOrElse(avg::setEnd, () -> avg.setEnd(""));

            // GAMBIARRA
            return flux
                    .reduce(0, (acc, curr) -> Integer.sum(acc, curr.getDuration()))
                    .zipWith(flux.count(), (sum, size) -> Long.divideUnsigned(sum.longValue(), size))
                    .map(average -> {
                        avg.setAverageDeliveryTime(average);
                        return avg;
                    });
        }
    }
}
