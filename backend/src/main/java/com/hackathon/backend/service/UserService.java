package com.hackathon.backend.service;

import com.hackathon.backend.dto.AuthenticationResponseDTO;
import com.hackathon.backend.entity.UserData;
import com.hackathon.backend.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void saveUser(String username, String password, String role, String name) {
        if (userRepository.findByUsername(username).isPresent()) {
            throw new IllegalArgumentException("Username already exists");
        }
        UserData userData = new UserData();
        userData.setUsername(username);
        userData.setName(name);
        userData.setPassword(passwordEncoder.encode(password));  // Encode the password
        userData.setRole(role);
        userRepository.save(userData);
    }

    public AuthenticationResponseDTO getAuthenticationResponseDto(String username) {
        Optional<UserData> op = userRepository.findByUsername(username);
        AuthenticationResponseDTO dto;
        if (op.isPresent()) {
            UserData user = op.get();
            String name = user.getName();  // Extract the name
            String usertype = user.getRole();  // Extract the user type
            dto = new AuthenticationResponseDTO("User details fetched successfully", name, username, usertype);
        } else {
            dto = new AuthenticationResponseDTO("User details not found", username, "no name", "no usertype");
        }
        return dto;
    }
}
