import React, { useEffect } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

const Logout = ({ onLogoutSuceess }) => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear authentication details from localStorage
        onLogoutSuceess();
    }, []);

    return (
        <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Typography variant="h4" gutterBottom>
                You've successfully logged out.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
                Thank you for using the Ticketing Portal!
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/">
                Go to Login Page
            </Button>
        </Box>
    );
};

export default Logout;
