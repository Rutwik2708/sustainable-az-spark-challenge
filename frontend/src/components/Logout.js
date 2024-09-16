import React, { useEffect } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';

const Logout = ({ onLogoutSuceess }) => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear authentication details from localStorage
        onLogoutSuceess();
    }, []);

    return (
        <Box sx={{ flexGrow: 1  }}>
            <Header/>
            <Container maxWidth="sm">
            <Card sx={{ mt: 5, p: 3, borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h4" gutterBottom>
                You've successfully logged out.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
                Thank you for using the Ticketing Portal!
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/">
                Go to Login Page
            </Button>
            </Card>
            </Container>
        </Box>
    );
};

export default Logout;
