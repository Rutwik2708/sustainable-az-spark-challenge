import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, Typography, Container, TextField, Button, Paper, List, ListItem, ListItemText, LinearProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import TicketService from '../services/TicketService';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const TicketDetail = ({ username, password, userType }) => {
    const { ticketId } = useParams();
    const [ticket, setTicket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTicketDetails = async () => {
            try {
                const response = await TicketService.getTicketById(ticketId, username, password);
                if (response) setTicket(response);

                // Fetch messages for the ticket
                const messagesResponse = await TicketService.getTicketMessages(ticketId, username, password);
                if (messagesResponse) setMessages(messagesResponse);
            } catch (error) {
                console.error('Error fetching ticket details:', error);
            }
        };

        fetchTicketDetails();
    }, [ticketId, username, password]);

    const handleSendMessage = async () => {
        try {
            // Send the new message to the backend
            await TicketService.createTicketMessage(ticketId, newMessage, username, password, "", userType);

            // Clear the input field
            setNewMessage('');

            // Fetch updated messages after sending the new one
            const messagesResponse = await TicketService.getTicketMessages(ticketId, username, password);
            if (messagesResponse) setMessages(messagesResponse);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const handleLogout = () => {
        navigate('/logout');
    };

    const getStatusProgress = (status) => {
        switch (status.toLowerCase()) {
            case 'new': return 25;
            case 'in progress': return 50;
            case 'resolved': return 75;
            case 'closed': return 100;
            default: return 0;
        }
    };

    const getSeverityColor = (severity) => {
        switch (severity.toLowerCase()) {
            case 'low': return 'green';
            case 'medium': return 'orange';  // More visible than yellow
            case 'high': return 'red';
            default: return 'gray';
        }
    };

    const isMessageFromUser = (messageUserType) => {
        return messageUserType === 'User';
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Header/>

            <Container maxWidth="md" sx={{ mt: 5 }}>
                {ticket ? (
                    <>
                        <Typography variant="h4" component="h1" gutterBottom>
                            Ticket #{ticket.id} - {ticket.subject}
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 3 }}>
                            {ticket.description}
                        </Typography>

                        <Typography variant="body2" sx={{ mb: 1 }}>
                            <strong>Status:</strong> {ticket.status}
                        </Typography>

                        {/* Status Progress Bar */}
                        <Box sx={{ mb: 3 }}>
                            <LinearProgress
                                variant="determinate"
                                value={getStatusProgress(ticket.status)}
                                sx={{
                                    height: 10,
                                    borderRadius: 5,
                                    backgroundColor: '#d3d3d3',
                                    '& .MuiLinearProgress-bar': {
                                        backgroundColor: ticket.status === 'closed' ? 'green' : 'blue',
                                    },
                                }}
                            />
                            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                                {ticket.status}
                            </Typography>
                        </Box>

                        {/* Severity with color */}
                        <Typography variant="body2" sx={{ mb: 3 }}>
                            <strong>Severity:</strong>{' '}
                            <span style={{ color: getSeverityColor(ticket.severity) }}>{ticket.severity}</span>
                        </Typography>

                        {/* Chat Section */}
                        <Paper sx={{ padding: 3, mt: 5, height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Typography variant="h6">Discussion</Typography>

                            {/* Message List */}
                            <List sx={{ maxHeight: 300, overflowY: 'auto', padding: 0, flexGrow: 1 }}>
                                {messages.length > 0 ? (
                                    messages.map((message, index) => (
                                        <ListItem 
                                            key={index} 
                                            sx={{ 
                                                alignSelf: isMessageFromUser(message.userType) ? 'flex-end' : 'flex-start',
                                                backgroundColor: isMessageFromUser(message.userType) ? '#DCF8C6' : '#FFF',
                                                borderRadius: 2,
                                                padding: '10px 15px',
                                                margin: '5px 0',
                                                maxWidth: '70%',
                                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                                                textAlign: isMessageFromUser(message.userType) ? 'right' : 'left'
                                            }}
                                        >
                                            <ListItemText
                                                primary={message.description}
                                                secondary = {message.userType == 'User' ? "User": message.username }
                                                sx={{ wordWrap: 'break-word' }}
                                            />
                                        </ListItem>
                                    ))
                                ) : (
                                    <Typography variant="body2" color="textSecondary">
                                        No messages yet.
                                    </Typography>
                                )}
                            </List>

                            {/* Input Section */}
                            <Box sx={{ display: 'flex', mt: 2 }}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Type your message..."
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSendMessage}
                                    sx={{ ml: 2 }}
                                >
                                    Send
                                </Button>
                            </Box>
                        </Paper>
                    </>
                ) : (
                    <Typography>Loading ticket details...</Typography>
                )}
            </Container>
        </Box>
    );
};

export default TicketDetail;
