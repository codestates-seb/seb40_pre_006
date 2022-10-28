package com.codestates.preproject.user.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

    @PostMapping
    public ResponseEntity postUser() {

        Map<String, Object> map = new HashMap<>();
        Map<String, String> map1 = new HashMap<>();

        map1.put("userId", "1");
        map1.put("email", "hgd@gmail.com");
        map1.put("name", "홍길동");
        map1.put("password", "123abc!@");
        map1.put("questionCount", "0");

        map.put("data", map1);

        return new ResponseEntity<>(map, HttpStatus.CREATED);

    }

    @GetMapping
    public ResponseEntity getUsers() {

        Map<String, Object> map = new HashMap<>();
        List<Object> list = new ArrayList<>();
        Map<String, String> map1 = new HashMap<>();
        Map<String, String> map2 = new HashMap<>();

        map1.put("userId", "1");
        map1.put("name", "홍길동1");
        map1.put("questionCount", "0");
        map2.put("userId", "2");
        map2.put("name", "홍길동2");
        map2.put("questionCount", "0");
        list.add(map1);
        list.add(map2);

        map.put("data", list);

        return new ResponseEntity<>(map, HttpStatus.OK);
    }

}
