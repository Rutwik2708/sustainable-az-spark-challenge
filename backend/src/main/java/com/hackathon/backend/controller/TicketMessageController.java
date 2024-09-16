package com.hackathon.backend.controller;

import com.hackathon.backend.dto.CreateTicketMessageDTO;
import com.hackathon.backend.entity.TicketMessage;
import com.hackathon.backend.service.TicketMessageService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ticket-messages")
public class TicketMessageController {

    private final TicketMessageService ticketMessageService;

    public TicketMessageController(TicketMessageService ticketMessageService) {
        this.ticketMessageService = ticketMessageService;
    }

    @PostMapping("/create")
    public ResponseEntity<TicketMessage> addTicketMessage(@RequestBody CreateTicketMessageDTO messageDTO) {
        TicketMessage createdMessage = ticketMessageService.addTicketMessage(messageDTO);
        return ResponseEntity.ok(createdMessage);
    }

    @GetMapping("/ticket/{ticketId}")
    public ResponseEntity<List<TicketMessage>> getMessagesByTicketId(@PathVariable Long ticketId) {
        List<TicketMessage> messages = ticketMessageService.getMessagesByTicketId(ticketId);
        return ResponseEntity.ok(messages);
    }
}

