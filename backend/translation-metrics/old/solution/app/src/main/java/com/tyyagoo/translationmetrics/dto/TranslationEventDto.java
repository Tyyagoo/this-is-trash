package com.tyyagoo.translationmetrics.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.tyyagoo.translationmetrics.model.TranslationEvent;
import lombok.Data;

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

        @JsonIgnore
        private int sum;
        @JsonIgnore
        private int count;

        public Average (LocalDateTime from, LocalDateTime to) {
            this.start = from.toString();
            this.end = to.toString();
            this.sum = 0;
            this.count = 0;
        }

        public Average(int sum, int count) {
            this.sum = sum;
            this.count = count;
        }

        public Average combine(Average other) {
            sum += other.sum;
            count += other.count;
            return this;
        }

        @JsonProperty(value = "average_delivery_time")
        public double getAverageDeliveryTime() {
            if (count < 1)
                return 0;

            return (double) sum / count;
        }
    }
}
