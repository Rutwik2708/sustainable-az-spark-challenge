package com.hackathon.backend.controller;

import com.hackathon.backend.dto.TicketStatusUpdateRequestDTO;
import com.hackathon.backend.dto.CreateTicketDTO;
import com.hackathon.backend.entity.Ticket;
import com.hackathon.backend.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {

    @Autowired
    private TicketService ticketService;

    @PostMapping("/create/")
    public ResponseEntity<Ticket> createTicket(@RequestBody CreateTicketDTO ticketDTO) {
        Ticket createdTicket = ticketService.createTicket(
                ticketDTO.getStatus(),
                ticketDTO.getSeverity(),
                ticketDTO.getSubject(),
                ticketDTO.getUsername(),
                ticketDTO.getMedia(),
                ticketDTO.getDescription(),
                ticketDTO.getPollutionCategory()
        );
        return ResponseEntity.ok(createdTicket);
    }

    @GetMapping
    public ResponseEntity<List<Ticket>> getAllTickets() {
        List<Ticket> tickets = ticketService.getAllTickets();
        return ResponseEntity.ok(tickets);
    }

    @GetMapping("/user/{username}")
    public ResponseEntity<List<Ticket>> getTicketsByUsername(@PathVariable String username) {
        List<Ticket> tickets = ticketService.getTicketsByUsername(username);
        if (!tickets.isEmpty()) {
            return ResponseEntity.ok(tickets);
        } else {
            return ResponseEntity.noContent().build(); // 204 if no tickets found
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ticket> getTicketById(@PathVariable Long id) {
        Optional<Ticket> ticketOptional = ticketService.getTicketById(id);
        return ticketOptional.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTicket(@PathVariable Long id) {
        ticketService.deleteTicket(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/update-status")
    public ResponseEntity<Object> updateTicketStatus(@RequestBody TicketStatusUpdateRequestDTO request) {
        Ticket updatedTicket = ticketService.updateTicketStatus(request.getTicketId(), request.getStatus());
        if (updatedTicket != null) {
            return ResponseEntity.ok(updatedTicket);
        }
        return ResponseEntity.badRequest().body("Invalid Ticket Id");
    }

}
