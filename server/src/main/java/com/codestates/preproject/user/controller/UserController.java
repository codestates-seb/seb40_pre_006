package com.codestates.preproject.user.controller;

import com.codestates.preproject.dto.MultiResponseDto;
import com.codestates.preproject.dto.SingleResponseDto;
import com.codestates.preproject.user.dto.UserDto;
import com.codestates.preproject.user.entity.User;
import com.codestates.preproject.user.mapper.UserMapper;
import com.codestates.preproject.user.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;
    private final UserMapper mapper;

    public UserController(UserService userService, UserMapper mapper){
        this.userService = userService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postUser(@RequestBody UserDto.Post requestBody){
        User user = mapper.userPostDtoToUser(requestBody);
        User response = userService.createUser(user);
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.userToUserResponseDto(response)),
                HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity getUsers(int page, int size){
        Page<User> pageUsers = userService.findUsers(page-1, size);
        List<User> users = pageUsers.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.userToUserResponseDtoGet(users), pageUsers),
                HttpStatus.OK);
    }
}
