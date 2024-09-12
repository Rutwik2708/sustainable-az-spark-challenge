package com.hackathon.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateTicketMessageDTO {

    private String username;

    private Long ticketId;

    private String description;

    private String media;

    private String userType;
}

