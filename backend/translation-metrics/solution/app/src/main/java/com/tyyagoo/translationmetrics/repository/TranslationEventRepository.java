package com.tyyagoo.translationmetrics.repository;

import com.tyyagoo.translationmetrics.model.TranslationEvent;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;

@Repository
public interface TranslationEventRepository extends ReactiveMongoRepository<TranslationEvent, String> {
    Mono<TranslationEvent> findFirstByTranslationId(String translationId);
    Flux<TranslationEvent> findAllByTimestampBetween(LocalDateTime from, LocalDateTime to);
}
