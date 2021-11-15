package com.tyyagoo.translationmetrics.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Data @NoArgsConstructor @AllArgsConstructor
public class DateTimeRangeDto {
    private String from;
    private String to;

    public LocalDateTime getFrom() {
        return LocalDateTime.parse(from, DateTimeFormatter.ISO_LOCAL_DATE_TIME);
    }

    public LocalDateTime getTo() {
        return LocalDateTime.parse(to, DateTimeFormatter.ISO_LOCAL_DATE_TIME);
    }
}
