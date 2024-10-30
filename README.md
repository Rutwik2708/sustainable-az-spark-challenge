# Voices Unheard

Voices Unheard is an AI-powered platform empowers individuals affected by mining to voice their concerns. This project was built as a part of the Arizona Sustainability Spark Challenge 2024.

## Tech Stack
AWS: EC2, RDS, Docker, Cohere, React.js, D3.js, Java, SpringBoot
  
## Useful Links
Hackathon Presentation: https://docs.google.com/presentation/d/17ZaQ4edw_2qOQ53_wCXqIKSnjqI_1bLxSdtzR1BsSo4/edit?usp=sharing
Demo Video: https://drive.google.com/file/d/1QwyK4k52yzklCRZtTp0RsWwkdfBM7ou2/view?usp=drive_link


## Project Structure

- `frontend/` - Contains the React frontend application.
- `backend/` - Contains the Spring Boot backend application.
- `Dockerfile` - Located in the root directory, used to build the Docker image for the backend.
- `frontend/Dockerfile` - Dockerfile for building the frontend Docker image.

## Getting Started

### Prerequisites

Make sure you have Docker installed on your machine. You can download and install Docker from [here](https://www.docker.com/get-started).

### Configuration

Before starting the application, you need to configure a few settings:

1. **API Base URL for Frontend**

   - In the React frontend, update the `API_BASE_URL` in `TicketService.js` and `UserService.js` to point to your backend API endpoint.

   Example:
   ```js
   const API_BASE_URL = 'http://localhost:8080'; // Replace with your backend URL
   ```

2. **Cohere API Key for Backend**

   - In the Spring Boot backend, add your Co-Here API key in `CohereService.java`.

   Example:
   ```java
   Cohere.builder().token("your-cohere-api-key").build(); // Replace with your Co-Here API key
   ```

### Running the Application

1. **Build and Run Backend**

   - Navigate to the root directory where the `Dockerfile` for the backend is located.
   - Build the Docker image and run the container:
     ```bash
     docker build -t backend-image .
     docker run -d -p 8080:8080 backend-image
     ```

2. **Build and Run Frontend**

   - Navigate to the `frontend` directory where the `Dockerfile` for the frontend is located.
   - Build the Docker image and run the container:
     ```bash
     docker build -t frontend-image .
     docker run -d -p 3000:3000 frontend-image
     ```

### Usage

1. **Create an Account**

   - Open your browser and navigate to `http://localhost:3000`.
   - Click on the **Sign Up** button to create a new user account.

2. **Log In**

   - After creating an account, you can log in using the credentials you provided during signup.

3. **Start Using the Application**

   - Once logged in, you can start using the application features.

## Troubleshooting

- If you encounter issues, ensure that the API Base URL is correctly set and that your Co-Here API key is valid.
- Check the Docker container logs for errors:
  ```bash
  docker logs <container-id>
  ```

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions, please reach out to [Rushabh Jaiswal](mailto:rjaisw15@asu.edu), [Ashish Wale](mailto:awale1@asu.edu) and [Rutwik Chaudhari](mailto:rchaud32@asu.edu).
