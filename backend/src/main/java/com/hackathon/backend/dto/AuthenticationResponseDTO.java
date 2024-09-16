package com.hackathon.backend.dto;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class AuthenticationResponseDTO {
    private String message;
    private String name;
    private String username;
    private String usertype;

    public AuthenticationResponseDTO(String message, String name, String username, String usertype) {
        this.message = message;
        this.name = name;
        this.username = username;
        this.usertype = usertype;
    }
}