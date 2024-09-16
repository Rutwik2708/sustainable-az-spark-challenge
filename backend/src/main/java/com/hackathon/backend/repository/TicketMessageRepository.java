package com.hackathon.backend.repository;

import com.hackathon.backend.entity.TicketMessage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TicketMessageRepository extends JpaRepository<TicketMessage, Long> {
    List<TicketMessage> findByTicketId(Long ticketId);
}
