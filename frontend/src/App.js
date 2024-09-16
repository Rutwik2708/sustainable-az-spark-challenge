import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import TicketList from './components/TicketList';
import Education from './components/Education';
import AddTicket from './components/AddTicket';
import Logout from './components/Logout';
import TicketDetail from './components/TicketDetail';
import AllTickets from './components/AllTickets';
import Home from './components/home';
import TicketListCategory from './components/TicketListCategory';

const App = () => {
    // Initialize state from localStorage
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('username') && localStorage.getItem('password') && localStorage.getItem('userType');
    });

    const [username, setUsername] = useState(localStorage.getItem('username') || '');
    const [password, setPassword] = useState(localStorage.getItem('password') || '');
    const [userType, setUserType] = useState(localStorage.getItem('userType') || '');

    const handleLoginSuccess = (username, password, userType) => {
        setIsAuthenticated(true);
        setUsername(username);
        setPassword(password);
        setUserType(userType);

        // Store login details in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('userType', userType);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUsername('');
        setPassword('');
        setUserType('');

        // Clear localStorage on logout
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('userType');
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
                    path="/ticketsgmview" 
                    element={isAuthenticated ? <AllTickets username={username} password = {password} onLogoutSuceess={handleLogout} /> : <Navigate to="/" />} 
                />
                 <Route 
                    path="/home" 
                    element={isAuthenticated ? <Home username={username} password = {password} onLogoutSuceess={handleLogout} /> : <Navigate to="/" />} 
                />
                 <Route path="/education" element={<Education />} />
                    
                <Route
                    path="/create-ticket"
                    element={isAuthenticated ? <AddTicket username={username} password={password}/> : <Navigate to="/" />} 
                />
                <Route path="/logout" element={<Logout onLogoutSuceess={handleLogout}/>} />
                <Route path="ticket/:ticketId" element={<TicketDetail username={username} password={password} userType={userType}/>} />
                <Route path="ticketsbycategory/:category" element={<TicketListCategory username={username} password={password} />} />
            </Routes>
        </Router>
    );
};

export default App;
