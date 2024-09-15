package com.hackathon.backend.others;

import com.hackathon.backend.entity.UserData;
import com.hackathon.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private CsvDataLoader csvDataLoader;

    @Override
    public void run(String... args) throws Exception {
        // Check if the user already exists to avoid duplications
        if (userRepository.findAll().isEmpty()) {
            // Insert the default user
            UserData defaultUser = new UserData(
                    "admin",                            // default username
                    passwordEncoder.encode("admin123"),
                    "ADMIN",                  // default role,
                    "Admin User"
            );

            userRepository.save(defaultUser);
        }
        // Load data from CSV
        csvDataLoader.loadCsvData();
    }
}

