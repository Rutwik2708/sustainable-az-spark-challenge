package com.hackathon.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TicketStatusUpdateRequestDTO {
    private Long ticketId;
    private String status;

}

