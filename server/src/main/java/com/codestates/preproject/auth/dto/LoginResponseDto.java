package com.codestates.preproject.auth.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginResponseDto {
    private long userId;
    private String name;
}
