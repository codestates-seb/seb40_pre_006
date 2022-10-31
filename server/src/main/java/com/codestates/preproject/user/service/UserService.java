package com.codestates.preproject.user.service;

import com.codestates.preproject.user.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    public User createUser(User user){
        User createdUser = user;
        return createdUser;
    }

    public List<User> findUsers() {
        List<User> users = List.of(
                new User(1L, "홍길동1", 0),
                new User(2L, "홍길동1", 0)
        );
        return users;
    }
}
