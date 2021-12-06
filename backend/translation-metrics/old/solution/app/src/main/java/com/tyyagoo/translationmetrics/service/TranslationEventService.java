package com.tyyagoo.translationmetrics.service;

import com.tyyagoo.translationmetrics.dto.TranslationEventDto.*;
import com.tyyagoo.translationmetrics.repository.TranslationEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Range;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;

@Service
public class TranslationEventService {

    @Autowired
    private TranslationEventRepository repository;

    public Mono<Unique> save(Mono<Unique> event) {
        return event
                .flatMap(ev -> repository.save(ev.toModel()))
                .map(Unique::fromModel);
    }

    public Mono<Unique> get(String translationId) {
        return repository.findFirstByTranslationId(translationId).map(Unique::fromModel);
    }

    public Mono<Average> averageBetween(LocalDateTime from, LocalDateTime to) {
        return repository
                .findAllByTimestampBetween(from, to)
                .reduce(new Average(from, to),
                        (acc, curr) -> acc.combine(new Average(curr.getDuration(), 1)));

    }
}
