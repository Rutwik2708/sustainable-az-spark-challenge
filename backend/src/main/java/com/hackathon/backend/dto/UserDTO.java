package com.hackathon.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    private String username;
    private String password;
    private String usertype;

    // Constructors
    public UserDTO() {}

    public UserDTO(String username, String password, String usertype) {
        this.username = username;
        this.password = password;
        this.usertype = usertype;
    }
}
