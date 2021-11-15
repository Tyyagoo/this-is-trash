package com.tyyagoo.translationmetrics.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TranslationEventRepository extends ReactiveMongoRepository<TranslationEventRepository, String> {
}
