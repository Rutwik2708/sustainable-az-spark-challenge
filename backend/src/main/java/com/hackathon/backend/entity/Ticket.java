package com.hackathon.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "tickets")
@Getter
@Setter
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String status;

    private String dateCreated;

    private String severity;

    private String description;

    private String pollutionCategory;

    private String subject;

    private String username;

    private String media;

    public Ticket() {
    }

    public Ticket(String status, String dateCreated, String severity, String subject, String username, String media
    , String description, String pollutionCategory) {
        this.status = status;
        this.dateCreated = dateCreated;
        this.severity = severity;
        this.subject = subject;
        this.username = username;
        this.media = media;
        this.description = description;
        this.pollutionCategory = pollutionCategory;
    }

}