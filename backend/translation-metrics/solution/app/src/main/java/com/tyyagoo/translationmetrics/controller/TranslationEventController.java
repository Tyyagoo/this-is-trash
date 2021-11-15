package com.tyyagoo.translationmetrics.controller;

import com.tyyagoo.translationmetrics.dto.TranslationEventDto.*;
import com.tyyagoo.translationmetrics.service.TranslationEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

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
    public ResponseEntity<Mono<Average>> averageBetween(@RequestParam String from, @RequestParam String to) {
        try {
            var fromDate = LocalDateTime.parse(from, DateTimeFormatter.ISO_LOCAL_DATE_TIME);
            var toDate = LocalDateTime.parse(to, DateTimeFormatter.ISO_LOCAL_DATE_TIME);
            return ResponseEntity.ok(service.averageBetween(fromDate, toDate));
        } catch (Exception err) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/now")
    public ResponseEntity<Mono<Average>> lastTenMinutesAverage() {
        var now = LocalDateTime.now(ZoneId.of("UTC"));
        return ResponseEntity.ok(service.averageBetween(now.minusMinutes(10), now));
    }
}
