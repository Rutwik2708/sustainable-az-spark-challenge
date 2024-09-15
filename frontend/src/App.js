import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import TicketList from './components/TicketList';
import AddTicket from './components/AddTicket';
import Logout from './components/Logout';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginSuccess = (username, password) => {
        setIsAuthenticated(true);
        setUsername(username);
        setPassword(password);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUsername('');
        setPassword('');
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />
                <Route path="/signup" element={<Signup />} />
                <Route 
                    path="/tickets" 
                    element={isAuthenticated ? <TicketList username={username} password = {password} onLogoutSuceess={handleLogout} /> : <Navigate to="/" />} 
                />
                <Route
                    path="/create-ticket"
                    element={isAuthenticated ? <AddTicket username={username} password={password}/> : <Navigate to="/" />} 
                />
                <Route path="/logout"
                element={<Logout onLogoutSuceess={handleLogout}/>} />
            </Routes>
        </Router>
    );
};

export default App;
