package com.hackathon.backend.service;

import com.hackathon.backend.dto.CreateTicketMessageDTO;
import com.hackathon.backend.entity.TicketMessage;
import com.hackathon.backend.repository.TicketMessageRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketMessageService {

    private final TicketMessageRepository ticketMessageRepository;

    public TicketMessageService(TicketMessageRepository ticketMessageRepository) {
        this.ticketMessageRepository = ticketMessageRepository;
    }

    public TicketMessage addTicketMessage(CreateTicketMessageDTO messageDTO) {
        // Fetch all messages for the given ticket to calculate the message number
        List<TicketMessage> existingMessages = ticketMessageRepository.findByTicketId(messageDTO.getTicketId());

        int nextMessageNo = existingMessages.size() + 1;

        TicketMessage ticketMessage = new TicketMessage(
                nextMessageNo,
                messageDTO.getUsername(),
                messageDTO.getTicketId(),
                messageDTO.getDescription(),
                messageDTO.getMedia(),
                messageDTO.getUserType()
        );

        return ticketMessageRepository.save(ticketMessage);
    }

    // Method to fetch messages by ticket ID
    public List<TicketMessage> getMessagesByTicketId(Long ticketId) {
        return ticketMessageRepository.findByTicketId(ticketId);
    }
}
