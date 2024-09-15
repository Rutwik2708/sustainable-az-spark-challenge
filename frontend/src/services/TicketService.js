import axios from 'axios';

// const API_BASE_URL = 'http://ec2-54-201-132-207.us-west-2.compute.amazonaws.com:8080';
const API_BASE_URL = 'http://localhost:8080';

const TicketService = {
    async getTicketsByUsername(username, password) {
        try {
            const config = {
                method: 'get',
                url: `${API_BASE_URL}/api/tickets/user/${username}`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${btoa(`${username}:${password}`)}`
                }
            };

            const response = await axios.request(config);
            return response.data;
        } catch (error) {
            console.error('Error fetching tickets:', error);
            throw error;
        }
    },

    async createTicketMessage(ticketId, message, username, password, media, userType) {
        try {
            const payload = {
                "description": message,
                "username": username,
                "ticketId": ticketId,
                "media": media,
                "userType": userType
            };

            const config = {
                method: 'post',
                url: `${API_BASE_URL}/api/ticket-messages/create`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${btoa(`${username}:${password}`)}`
                },
                data: JSON.stringify(payload)
            };

            const response = await axios.request(config);
            return response.data;
        } catch (error) {
            console.error('Error creating ticket message:', error);
            throw error;
        }
    },

    async getTicketMessages(ticketId, username, password) {
        try {
            const config = {
                method: 'get',
                url: `${API_BASE_URL}/api/ticket-messages/ticket/${ticketId}`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${btoa(`${username}:${password}`)}`
                }
            };

            const response = await axios.request(config);
            return response.data;
        } catch (error) {
            console.error('Error fetching ticket:', error);
            throw error;
        }
    },

    async getTicketById(ticketId, username, password) {
        try {
            const config = {
                method: 'get',
                url: `${API_BASE_URL}/api/tickets/${ticketId}`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${btoa(`${username}:${password}`)}`
                }
            };

            const response = await axios.request(config);
            return response.data;
        } catch (error) {
            console.error('Error fetching ticket:', error);
            throw error;
        }
    },

    async createTicket(ticketData) {
        try {
            const payload = {
                "status": ticketData.status,
                "severity": ticketData.severity,
                "subject": ticketData.subject,
                "username": ticketData.username,
                "media": ticketData.media
            };

            const encodedCredentials = btoa(`${ticketData.username}:${ticketData.password}`);
              
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${API_BASE_URL}/api/tickets/create/`,
                headers: { 
                  'Content-Type': 'application/json', 
                  'Authorization': `Basic ${encodedCredentials}`
                },
                data : JSON.stringify(payload)
            };

            const response = await axios.request(config);

            return response;
        } catch (error) {
            console.error('Error creating ticket:', error);
            throw error;
        }
    },

    async updateTicketStatus({ ticketId, status }) {
        try {
            // Define Axios configuration for updating ticket status
            const config = {
                method: 'post',
                url: `${API_BASE_URL}/update-ticket-status`,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify({ ticketId, status }),
            };

            // const response = await axios.request(config);
            // return response.data;
        } catch (error) {
            console.error('Error updating ticket status:', error);
            throw error;
        }
    },

    async closeTicket({ ticketId }) {
        try {
            // Define Axios configuration for closing a ticket
            const config = {
                method: 'post',
                url: `${API_BASE_URL}/close-ticket`,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify({ ticketId }),
            };

            // const response = await axios.request(config);
            // return response.data;
        } catch (error) {
            console.error('Error closing ticket:', error);
            throw error;
        }
    },

    async getAllTickets(username, password) {
        try {
            const config = {
                method: 'get',
                url: `${API_BASE_URL}/api/tickets`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${btoa(`${username}:${password}`)}`
                }
            };

            const response = await axios.request(config);
            return response.data;
        } catch (error) {
            console.error('Error fetching tickets: ', error);
            throw error;
        }
    },

};

export default TicketService;
