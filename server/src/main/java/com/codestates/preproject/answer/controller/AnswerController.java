package com.codestates.preproject.answer.controller;

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
@RequestMapping("/answer")
public class AnswerController {

    @PostMapping
    public ResponseEntity postAnswer() {

        Map<String, Object> map = new HashMap<>();
        Map<String, Object> map1 = new HashMap<>();
        LocalDateTime currentDateTime = LocalDateTime.now();

        map1.put("answerId", "1");
        map1.put("answerBody", "댓글 본문");
        map1.put("createdAt", currentDateTime);
        map1.put("name", "홍길동");
        map1.put("questionId", "홍길동");

        map.put("data", map1);

        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }


    @GetMapping("/{question-id}")
    public ResponseEntity getAnswer(@PathVariable("question-id") long questionId){

        Map<String, Object> map = new HashMap<>();
        List<Object> list = new ArrayList<>();
        Map<String, Object> map1 = new HashMap<>();
        Map<String, Object> map2 = new HashMap<>();
        LocalDateTime currentDateTime = LocalDateTime.now();

        map1.put("answerId", "1");
        map1.put("answerBody", "댓글 본문");
        map1.put("createdAt", currentDateTime);
        map1.put("name", "홍길동1");
        map1.put("questionId", "1");
        map2.put("answerId", "2");
        map2.put("answerBody", "댓글 본문");
        map2.put("createdAt", currentDateTime);
        map2.put("name", "홍길동2");
        map2.put("questionId", "1");

        list.add(map1);
        list.add(map2);

        map.put("data", list);

        return new ResponseEntity<>(map, HttpStatus.OK);
    }
    
}
