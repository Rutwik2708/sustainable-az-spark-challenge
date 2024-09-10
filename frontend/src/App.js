import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import TicketList from './components/TicketList';

const App = () => {
    const handleLoginSuccess = () => {
        // Handle login success (e.g., set user context or state)
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/tickets" element={<TicketList />} />
            </Routes>
        </Router>
    );
};

export default App;
