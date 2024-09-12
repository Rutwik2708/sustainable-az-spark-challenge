package com.hackathon.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateTicketDTO {

    private String status;

    private String dateCreated;

    private String severity;

    private String subject;

    private String username;

    private String media;

}
