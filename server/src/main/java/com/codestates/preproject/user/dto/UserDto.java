package com.codestates.preproject.user.dto;

import lombok.Getter;
import lombok.Setter;

public class UserDto {
    @Getter
    public static class Post {
        private String email;
        private String name;
        private String password;
    }

    @Getter
    @Setter
    public static class Response {
        private long userId;
        private String email;
        private String name;
        private String password;
        private int questionCount;
    }
}