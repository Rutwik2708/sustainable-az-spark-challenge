package com.hackathon.backend.service;

import com.hackathon.backend.entity.UserData;
import com.hackathon.backend.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
//    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository) {
//    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
//        this.passwordEncoder = passwordEncoder;
    }

    public void saveUser(String username, String password, String role) {
        UserData userData = new UserData();
        userData.setUsername(username);
        userData.setPassword(password);  // Encode the password
//        userData.setPassword(passwordEncoder.encode(password));  // Encode the password
        userData.setRole(role);
        userRepository.save(userData);
    }
}
