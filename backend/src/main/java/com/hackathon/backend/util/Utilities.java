package com.hackathon.backend.util;

import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Component
public class Utilities {

    public String getCurrDate() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate currentDate = LocalDate.now();

        // Convert current date to string using the formatter
        return currentDate.format(formatter);
    }
}
