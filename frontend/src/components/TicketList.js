import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, Container, AppBar, Toolbar, Button } from '@mui/material';
import TicketService from '../services/TicketService';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const TicketList = ({ username, password }) => {
    const [tickets, setTickets] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                // Fetch tickets by username
                const response = await TicketService.getTicketsByUsername(username, password);
                if (response != undefined)
                    setTickets(response);
            } catch (error) {
                console.error('Error fetching tickets:', error);
            }
        };

        if (username) {
            fetchTickets();
        }
    }, [username]);

    const handleCreateTicket = () => {
        // Logic for navigating to Create Ticket page/form
        navigate('/create-ticket'); // Assuming you have a route for creating a ticket
    };

    const handleLogout = () => {
        navigate('/logout')
    };

    const handleTicketClick = (ticketId) => {
        navigate(`/ticket/${ticketId}`);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* AppBar only shows after user logs in */}
            <Header/>
            

            {/* Create Ticket Button */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, mr: 2 }}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleCreateTicket}
                    sx={{ position: 'absolute', top: 80, right: 20 }}  // Position button at the top-right below the AppBar
                >
                    Create Ticket
                </Button>
            </Box>

            {/* Tickets Display */}
            <Container maxWidth="md" sx={{ mt: 5 }}>
                <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 3 }}>
                    Tickets for {username}
                </Typography>
                {tickets.length > 0 ? (
                    tickets.map(ticket => (
                        <Card key={ticket.id} sx={{ mb: 3, borderRadius: 2, boxShadow: 3 }} onClick={() => {handleTicketClick(ticket.id)}}>
                            <CardContent>
                                {/* Display subject */}
                                <Typography variant="h5" component="div">
                                    {ticket.subject}
                                </Typography>

                                {/* Display status */}
                                <Typography variant="body2" color="text.primary">
                                    <strong>Status:</strong> {ticket.status}
                                </Typography>

                                {/* Display severity */}
                                <Typography variant="body2" color="text.primary">
                                    <strong>Severity:</strong> {ticket.severity}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <Typography variant="body1" align="center">
                        No tickets found for {username}.
                    </Typography>
                )}
            </Container>
        </Box>
    );
};

export default TicketList;
