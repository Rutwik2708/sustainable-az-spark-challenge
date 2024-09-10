import React from 'react';
import { Card, CardContent, Typography, Box, Container } from '@mui/material';
import { getAllTickets } from '../services/TicketService';

const TicketList = () => {
    // Sample ticket data
    const tickets = getAllTickets().data;

    return (
        <Container maxWidth="md">
            <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 3 }}>
                Tickets
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
