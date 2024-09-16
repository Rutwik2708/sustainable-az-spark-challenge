package com.hackathon.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class UserData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  // Use Long instead of int for ID

    private String username;
    private String name;
    private String password;
    private String role;

    public UserData() {
    }

    public UserData(String username, String password, String role, String name) {
        this.username = username;
        this.name = name;
        this.password = password;
        this.role = role;
    }
}
