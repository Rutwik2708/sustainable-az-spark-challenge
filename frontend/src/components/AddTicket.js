import React, { useState } from 'react';
import { createTicket } from '../services/TicketService';

const AddTicket = () => {
    const [ticket, setTicket] = useState({
        title: '',
        description: '',
        status: 'New',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTicket({ ...ticket, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createTicket(ticket);
        // Optionally, redirect or refresh ticket list
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={ticket.title}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    name="description"
                    value={ticket.description}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Add Ticket</button>
        </form>
    );
};

export default AddTicket;
