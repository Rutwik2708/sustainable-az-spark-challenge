import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, TextField, Button, Alert, Box, Container, Link, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import UserService from '../services/UserService'; 
import Header from './Header'; 

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('User');  // Default user type
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (name && email && password && userType) {
            try {
                await UserService.signUp({
                    name,
                    email,
                    password,
                    userType,  // Add userType to the signup request
                });
                setMessage('Account created successfully!');
                
                // Result has the usertype, based on that we want to redircet to the respective page
                if (userType === 'Mining Corporation') {
                    // Redirect to Mining Corporation ticket resolving page
                    navigate('/');

                } else if (userType === 'Govt Authorities') {
                    // Redirect to Govt Authorities monitoring page
                    navigate('/');

                } else {
                    navigate('/tickets'); // Redirect to tickets page
                }
            } catch (error) {
                setMessage('User creation failed.');
            }
        } else {
            setMessage('Please fill out all fields.');
        }
    };

    const renderFormInputs = () => {
        switch (userType) {
            case 'Mining Corporation':
                return (
                    <>
                        <TextField
                            label="Corporation Name"
                            variant="outlined"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Corporate Email Address"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                    </>
                );
            case 'Govt Authorities':
                return (
                    <>
                        <TextField
                            label="Authority Name"
                            variant="outlined"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Government Email Address"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                    </>
                );
            default:  // 'User'
                return (
                    <>
                        <TextField
                            label="Full Name"
                            variant="outlined"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Username"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                    </>
                );
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Header/>
        <Container maxWidth="sm">
            <Card sx={{ mt: 5, p: 3, borderRadius: 2, boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="h4" component="h1" gutterBottom align="center">
                        Sign Up
                    </Typography>

                    {message && (
                        <Alert severity={message === 'Account created successfully!' ? 'success' : 'error'} sx={{ mb: 2 }}>
                            {message}
                        </Alert>
                    )}

                    <FormControl component="fieldset" sx={{ mb: 3 }}>
                        <FormLabel component="legend">Select User Type</FormLabel>
                        <RadioGroup
                            aria-label="userType"
                            name="userType"
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                        >
                            <FormControlLabel value="User" control={<Radio />} label="Public User" />
                            <FormControlLabel value="Mining Corporation" control={<Radio />} label="Mining Corporation" />
                            <FormControlLabel value="Govt Authorities" control={<Radio />} label="Govt Authorities" />
                        </RadioGroup>
                    </FormControl>

                    <Box component="form" onSubmit={handleSubmit}>
                        {renderFormInputs()}
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Sign Up
                        </Button>
                    </Box>
                    <Box mt={2} textAlign="center">
                        <Typography variant="body2">
                            Already have an account?{' '}
                            <Link href="/" underline="hover">
                                Login
                            </Link>
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Container>
        </Box>
    );
};

export default Signup;
