package com.hackathon.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "ticket_messages")
public class TicketMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long messageId;

    @Column(nullable = false)
    private int messageNo;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private Long ticketId;

    @Column(nullable = false, length = 1000)
    private String description;

    private String media;

    @Column(nullable = false)
    private String userType;

    // Constructors, Getters, and Setters
    public TicketMessage() {}

    public TicketMessage(int messageNo, String username, Long ticketId, String description, String media, String userType) {
        this.messageNo = messageNo;
        this.username = username;
        this.ticketId = ticketId;
        this.description = description;
        this.media = media;
        this.userType = userType;
    }

    // Getters and Setters
    public Long getMessageId() {
        return messageId;
    }

    public void setMessageId(Long messageId) {
        this.messageId = messageId;
    }

    public int getMessageNo() {
        return messageNo;
    }

    public void setMessageNo(int messageNo) {
        this.messageNo = messageNo;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Long getTicketId() {
        return ticketId;
    }

    public void setTicketId(Long ticketId) {
        this.ticketId = ticketId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getMedia() {
        return media;
    }

    public void setMedia(String media) {
        this.media = media;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }
}

