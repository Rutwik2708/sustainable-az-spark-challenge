import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, Typography, TextField, Button, Alert, Box, Container, Link } from '@mui/material';

const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create the Authorization header dynamically using Base64 encoding
        const encodedCredentials = btoa(`${username}:${password}`);

        // Define Axios configuration with headers
        const config = {
            method: 'get',  // If the API requires GET, keep it as GET
            url: 'http://localhost:8080/login',
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': `Basic ${encodedCredentials}`,  // Dynamically set the Basic Auth header
            },
        };

        try {
            // Send login request to the backend API
            const response = await axios.request(config);
            
            // If login is successful, update the parent with login success and redirect
            if (response.status === 200) {
                onLoginSuccess();
                setMessage('Login successful!');
                navigate('/tickets');
            }
        } catch (error) {
            // If login failed (e.g., 401 from the backend), show error message
            setMessage('Invalid credentials. Please try again.');
        }
    };

    return (
        <Container maxWidth="sm">
            <Card sx={{ mt: 5, p: 3, borderRadius: 2, boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="h4" component="h1" gutterBottom align="center">
                        Login
                    </Typography>

                    {message && (
                        <Alert severity={message === 'Login successful!' ? 'success' : 'error'} sx={{ mb: 2 }}>
                            {message}
                        </Alert>
                    )}

                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField
                            label="Email Address"
                            variant="outlined"
                            fullWidth
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            type="password"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Login
                        </Button>
                    </Box>
                    <Box mt={2} textAlign="center">
                        <Typography variant="body2">
                            Don't have an account?{' '}
                            <Link href="/signup" underline="hover">
                                Sign Up
                            </Link>
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Login;
