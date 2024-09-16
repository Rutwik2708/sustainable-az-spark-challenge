package com.hackathon.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    private String username;
    private String password;
    private String usertype;
    private String name;

    public UserDTO() {
    }

    public UserDTO(String username, String password, String usertype, String name) {
        this.username = username;
        this.password = password;
        this.usertype = usertype;
        this.name = name;
    }
}
