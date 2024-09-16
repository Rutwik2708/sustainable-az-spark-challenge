# Use the latest Maven slim image with OpenJDK
FROM maven:3.8.6-openjdk-18-slim AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the pom.xml and download dependencies
COPY backend/pom.xml .
RUN mvn dependency:go-offline

# Copy the source code and build the application
COPY backend/src /app/src
RUN mvn package -DskipTests

# Use the slim OpenJDK image to run the application
FROM openjdk:17.0.1-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the built JAR file from the previous stage
COPY --from=build /app/target/backend-0.0.1-SNAPSHOT.jar app.jar

# Expose the port that the application will run on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
