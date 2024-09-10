import axios from 'axios';

const API_BASE_URL = 'http://ec2-54-90-131-236.compute-1.amazonaws.com:8080';

const UserService = {
    async signUp({ name, email, password, userType }) {
        try {
            // Prepare the request body with user data
            const userData = {
                name,
                email,
                password,
                userType,  // Include userType in the request
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
                url: `${API_BASE_URL}/login`, // Endpoint for login
                headers: { 
                    'Content-Type': 'application/json', 
                    'Authorization': `Basic ${encodedCredentials}`,  // Set Basic Auth header
                },
            };

            // Send login request to the backend API
            const response = await axios.request(config);

            // Return the response to the component
            // return response;

            return {data : 'User', status : 200};
        } catch (error) {
            console.error('Login error:', error);
            throw error; // Rethrow the error so it can be handled in the component
        }
    }
};

export default UserService;
