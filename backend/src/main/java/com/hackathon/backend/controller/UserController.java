package com.hackathon.backend.controller;

import com.hackathon.backend.dto.AuthenticationResponseDTO;
import com.hackathon.backend.dto.UserDTO;
import com.hackathon.backend.service.UserService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<String> createUser(@RequestBody UserDTO userDTO) {
        try {
            userService.saveUser(userDTO.getUsername(), userDTO.getPassword(), userDTO.getUsertype(), userDTO.getName());
            return ResponseEntity.status(HttpStatus.CREATED).body("User created successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }


    @GetMapping("/api/test")
    public ResponseEntity<String> getAuthenticatedUserDetails() {
        return ResponseEntity.status(HttpStatus.OK).body("Test successful");
    }

    @GetMapping("/authenticate")
    public ResponseEntity<AuthenticationResponseDTO> getAuthenticatedUserDetails(HttpServletResponse response) throws IOException {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        AuthenticationResponseDTO dto = null;
        if (authentication != null && authentication.isAuthenticated()) {
            String username = authentication.getName(); // Extract username from security context
            dto = userService.getAuthenticationResponseDto(username);
        }
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

}

