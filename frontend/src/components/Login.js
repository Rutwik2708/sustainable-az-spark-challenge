import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, TextField, Button, Alert, Box, Container, Link } from '@mui/material';
import Userservice from '../services/UserService';

const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [userType, setUserType] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Userservice.login({
                username,
                password
            });

            if (response.status === 200) {
                onLoginSuccess(username, password, response.data.usertype); // Pass the username to the parent component
                setMessage('Login successful!');
                if (response.data.usertype === 'Mining Corporation') {
                    //naigate()
                } else if (response.data.usertype === 'Govt Authorities') {

                } else {
                    navigate('/tickets');
                }
            }
        } catch (error) {
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
