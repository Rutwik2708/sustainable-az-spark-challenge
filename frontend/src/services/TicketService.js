import axios from 'axios';

const API_URL = 'http://localhost:8080/api/tickets';

const getAllTickets = () => {
    var response = {
        data : [
            {
                title: "title",
                description: "description",
                status: "status"
            },
            {
                title: "title",
                description: "description",
                status: "status"
            },
            {
                title: "title",
                description: "description",
                status: "status"
            }
        ]
    };
    return response;
    // return axios.get(API_URL);
};

const createTicket = (ticket) => {
    return "";
    // return axios.post(API_URL, ticket);
};

const updateTicket = (id, ticket) => {
    return "";
    // return axios.put(`${API_URL}/${id}`, ticket);
};

const deleteTicket = (id) => {
    return "";
    // return axios.delete(`${API_URL}/${id}`);
};

export { getAllTickets, createTicket, updateTicket, deleteTicket };
