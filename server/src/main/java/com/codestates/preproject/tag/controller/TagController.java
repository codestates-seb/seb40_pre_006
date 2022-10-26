package com.codestates.preproject.tag.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("tag")
public class TagController {

    @GetMapping
    public ResponseEntity getTags() {

        Map<String, Object> map = new HashMap<>();
        List<Object> list = new ArrayList<>();
        Map<String, String> map1 = new HashMap<>();
        Map<String, String> map2 = new HashMap<>();

        map1.put("tagId", "1");
        map1.put("tagName", "Java");
        map2.put("tagId", "2");
        map2.put("tagName", "C++");
        list.add(map1);
        list.add(map2);

        map.put("data", list);

        return new ResponseEntity<>(map, HttpStatus.OK);
    }

}
