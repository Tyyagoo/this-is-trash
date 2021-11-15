package com.tyyagoo.translationmetrics.controller;

import com.tyyagoo.translationmetrics.dto.DateTimeRangeDto;
import com.tyyagoo.translationmetrics.dto.TranslationEventDto.*;
import com.tyyagoo.translationmetrics.service.TranslationEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;

@RestController
@RequestMapping(path = "/events/translation")
public class TranslationEventController {

    @Autowired
    private TranslationEventService service;

    @PostMapping
    public ResponseEntity<Mono<Unique>> create(@RequestBody Mono<Unique> payload) {
        return ResponseEntity.ok(service.save(payload));
    }

    @GetMapping
    public ResponseEntity<Mono<Average>> averageBetween(@RequestBody Mono<DateTimeRangeDto> range) {
        return ResponseEntity.ok(range.flatMap(r -> service.averageBetween(r.getFrom(), r.getTo())));
    }

    @GetMapping("/now")
    public ResponseEntity<Mono<Average>> lastTenMinutesAverage() {
        var now = LocalDateTime.now();
        return ResponseEntity.ok(service.averageBetween(now.minusMinutes(10), now));
    }
}
