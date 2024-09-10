const API_BASE_URL = '/api/users';

const UserService = {
    async signUp(userData) {
        try {
            const response = await fetch(`${API_BASE_URL}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('User creation failed');
            }

            return await response.json();
        } catch (error) {
            console.error('Error during sign up:', error);
            throw error;
        }
    },

    // Add other user-related API methods here (e.g., login, getUser, etc.)
};

export default UserService;
