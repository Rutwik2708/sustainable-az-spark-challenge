package com.hackathon.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class UserData {

    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String username;
    private String password;
    private String role;

    // Getters and Setters

    public UserData() {
    }

    public UserData(String username, String password, String role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }
}
