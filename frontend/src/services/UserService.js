import axios from 'axios';

const API_BASE_URL = 'http://ec2-18-216-120-4.us-east-2.compute.amazonaws.com:8080';
// const API_BASE_URL = 'http://localhost:8080';

const UserService = {
    async signUp({ name, email, password, userType }) {
        try {
            // Prepare the request body with user data
            const userData = {
                "name": name,
                "username": email,
                "password": password,
                "usertype": userType
            };
    
            // Define Axios configuration with headers
            const config = {
                method: 'post',
                url: `${API_BASE_URL}/signup`,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify(userData),
            };
    
            const response = await axios.request(config);
        } catch (error) {
            console.error('Sign-up error:', error);
            throw error;
        }
    },

    async login({ username, password }) {
        try {
            // Create the Authorization header dynamically using Base64 encoding
            const encodedCredentials = btoa(`${username}:${password}`);

            // Define Axios configuration with headers
            const config = {
                method: 'get', // Adjust to POST or GET based on your backend API
                url: `${API_BASE_URL}/authenticate`, // Endpoint for login
                headers: { 
                    'Content-Type': 'application/json', 
                    'Authorization': `Basic ${encodedCredentials}`,  // Set Basic Auth header
                },
            };

            // Send login request to the backend API
            const response = await axios.request(config);

            // Return the response to the component
            return response;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }
};

export default UserService;
