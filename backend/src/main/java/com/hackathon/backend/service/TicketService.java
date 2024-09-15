package com.hackathon.backend.service;

import com.hackathon.backend.entity.Ticket;
import com.hackathon.backend.repository.TicketRepository;
import com.hackathon.backend.util.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    @Autowired
    private Utilities util;

    public Ticket createTicket(String status, String severity, String subject, String username, String media) {
        // Assuming util.getCurrDate() returns the current date as String
        String currentDate = util.getCurrDate();

        Ticket ticket = new Ticket(status, currentDate, severity, subject, username, media, "", "");

        return ticketRepository.save(ticket);
    }

    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    public List<Ticket> getTicketsByUsername(String username) {
        return ticketRepository.findByUsername(username);
    }

    public Optional<Ticket> getTicketById(Long id) {
        return ticketRepository.findById(id);
    }

    public void deleteTicket(Long id) {
        ticketRepository.deleteById(id);
    }

    public Ticket updateTicket(Long id, Ticket updatedTicket) {
        Optional<Ticket> ticketOptional = ticketRepository.findById(id);

        if (ticketOptional.isPresent()) {
            Ticket existingTicket = ticketOptional.get();
            existingTicket.setStatus(updatedTicket.getStatus());
            existingTicket.setSeverity(updatedTicket.getSeverity());
            existingTicket.setSubject(updatedTicket.getSubject());
            existingTicket.setMedia(updatedTicket.getMedia());
            return ticketRepository.save(existingTicket);
        }

        return null;
    }

    public Ticket updateTicketStatus(Long ticketId, String status) {
        Optional<Ticket> ticketOptional = ticketRepository.findById(ticketId);
        if (ticketOptional.isPresent()) {
            Ticket existingTicket = ticketOptional.get();
            existingTicket.setStatus(status);
            return ticketRepository.save(existingTicket);
        }
        return null;
    }

}
