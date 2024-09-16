import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Card, CardContent, Typography, Box, MenuItem } from '@mui/material';
import { AppBar, Toolbar } from '@mui/material';
import TicketService from '../services/TicketService';
import Header from './Header';

const AddTicket = ({ username, password }) => {
    const [ticket, setTicket] = useState({
        subject: '',
        description: '',
        status: 'New',
        severity: '',
        media: ''
    });
    const [mediaFile, setMediaFile] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTicket({ ...ticket, [name]: value });
    };

    const handleFileChange = (e) => {
        setMediaFile(e.target.files[0]); // Only allow one file to be uploaded
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (mediaFile) {
            // upload this directly to aws s3 bucket, it will provide a url of the location
            // pass that url to the ticket creation api
        }

        try {
            ticket.username = username;
            ticket.password = password;
            const response = await TicketService.createTicket(ticket);
            if (response.status === 200) {
                // Optionally refresh the ticket list after creation
                navigate('/tickets');
            }
            // Optionally redirect or refresh the ticket list after creation
        } catch (error) {
            console.error('Error creating ticket:', error);
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* AppBar only shows after user logs in */}
            <Header/>

            <Container maxWidth="sm">
                <Card sx={{ mt: 5, p: 3, borderRadius: 2, boxShadow: 3 }}>
                    <CardContent>
                        <Typography variant="h4" component="h1" gutterBottom align="center">
                            Create New Ticket
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField
                                label="Subject"
                                name="subject"
                                value={ticket.subject}
                                onChange={handleChange}
                                fullWidth
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                label="Description"
                                name="description"
                                value={ticket.description}
                                onChange={handleChange}
                                fullWidth
                                multiline
                                rows={4}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                label="Status"
                                name="status"
                                value={ticket.status}
                                onChange={handleChange}
                                fullWidth
                                select
                                sx={{ mb: 2 }}
                            >
                                <MenuItem value="New">New</MenuItem>
                                <MenuItem value="In Progress">In Progress</MenuItem>
                                <MenuItem value="Resolved">Resolved</MenuItem>
                            </TextField>
                            <TextField
                                label="Severity"
                                name="severity"
                                value={ticket.severity}
                                onChange={handleChange}
                                fullWidth
                                select
                                sx={{ mb: 2 }}
                            >
                                <MenuItem value="Low">Low</MenuItem>
                                <MenuItem value="Medium">Medium</MenuItem>
                                <MenuItem value="High">High</MenuItem>
                            </TextField>

                            {/* File input for media (photo/video) */}
                            <Button
                                variant="contained"
                                component="label"
                                sx={{ mb: 2 }}
                            >
                                Upload Media
                                <input
                                    type="file"
                                    hidden
                                    accept="image/*,video/*"  // Accept only image and video files
                                    onChange={handleFileChange}
                                />
                            </Button>

                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Submit Ticket
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
};

export default AddTicket;
