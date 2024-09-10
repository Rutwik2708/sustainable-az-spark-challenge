import axios from 'axios';

const API_BASE_URL = 'http://ec2-54-90-131-236.compute-1.amazonaws.com:8080';

const TicketService = {
    async getTicketsByUsername(username) {
        try {
            const response = await axios.get(`${API_BASE_URL}/tickets`, {
                params: { username },
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            // comment out after testing
            var dummyRes = {
                data : [
                    {
                        ticket: 'ticket1',
                        description: 'description1',
                        status: 'status1',
                    },
                    {
                        ticket: 'ticket1',
                        description: 'description1',
                        status: 'status1',
                    },
                    {
                        ticket: 'ticket1',
                        description: 'description1',
                        status: 'status1',
                    }
                ]
            };
            return dummyRes;
            // return response.data; // Return the ticket data
        } catch (error) {
            console.error('Error fetching tickets:', error);
            throw error; // Rethrow the error to handle it in the component
        }
    },

    async createTicket(ticket) {

    },

    async updateTicketStatus(ticketId, status) {

    },

    async closeTicket(ticketId) {

    }
};

export default TicketService;