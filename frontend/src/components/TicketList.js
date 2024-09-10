import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, Container } from '@mui/material';
import TicketService, { getAllTickets } from '../services/TicketService';

const TicketList = ({ username }) => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                // Assuming `getAllTickets` is a function that fetches tickets for a specific user
                const response = await TicketService.getTicketsByUsername(username);
                setTickets(response.data);
            } catch (error) {
                console.error('Error fetching tickets:', error);
            }
        };

        fetchTickets();
    }, [username]);

    return (
        <Container maxWidth="md">
            <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 3 }}>
                Tickets for {username}
            </Typography>
            {tickets.map(ticket => (
                <Card key={ticket.id} sx={{ mb: 3, borderRadius: 2, boxShadow: 3 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {ticket.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {ticket.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
};

export default TicketList;
