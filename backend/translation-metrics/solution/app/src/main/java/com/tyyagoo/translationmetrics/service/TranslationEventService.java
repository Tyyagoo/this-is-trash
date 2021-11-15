package com.tyyagoo.translationmetrics.service;

import com.tyyagoo.translationmetrics.repository.TranslationEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TranslationEventService {

    @Autowired
    private TranslationEventRepository repository;
}
