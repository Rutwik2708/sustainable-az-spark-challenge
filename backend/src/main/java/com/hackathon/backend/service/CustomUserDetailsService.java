package com.hackathon.backend.service;

import com.hackathon.backend.entity.UserData;
import com.hackathon.backend.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Fetch user from database
        UserData userData = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        // Convert to Spring Security User object
        return org.springframework.security.core.userdetails.User.builder()
                .username(userData.getUsername())
                .password(userData.getPassword())  // Password should be hashed
                .roles(userData.getRole())  // Assign roles
                .build();
    }
}
