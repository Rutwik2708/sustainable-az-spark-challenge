import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import TicketList from './components/TicketList';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');

    const handleLoginSuccess = (username) => {
        setIsAuthenticated(true);
        setUsername(username);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />
                <Route path="/signup" element={<Signup />} />
                <Route 
                    path="/tickets" 
                    element={isAuthenticated ? <TicketList username={username} /> : <Navigate to="/" />} 
                />
            </Routes>
        </Router>
    );
};

export default App;
