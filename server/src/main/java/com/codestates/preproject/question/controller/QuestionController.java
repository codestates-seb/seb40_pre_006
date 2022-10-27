package com.codestates.preproject.question.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/question")
public class QuestionController {
    @PostMapping
    public ResponseEntity postQuestion() {
        Map<String, Object> map = new HashMap<>();
        Map<String, Object> map1 = new HashMap<>();
        Map<String, Object> map2 = new HashMap<>();
        List<Object> list = new ArrayList<>();

        map.put("questionId", 1);
        map.put("title", "제목");
        map.put("questionBody", "질문 본문");
        map1.put("tagName", "java");
        map2.put("tagName", "c++");
        list.add(map1);
        list.add(map2);
        map.put("questionTagList", list);
        map.put("voteCount", 0);
        map.put("answerCount", 0);
        map.put("name", "홍길동");
        map.put("createdAt", "2022-10-26T18:17:44.226658200");

        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion() {
        Map<String, Object> map = new HashMap<>();
        Map<String, Object> map1 = new HashMap<>();
        Map<String, Object> map2 = new HashMap<>();
        List<Object> list = new ArrayList<>();

        map.put("questionId", 1);
        map.put("title", "제목");
        map.put("questionBody", "질문 본문");
        map1.put("tagName", "java");
        map2.put("tagName", "c++");
        list.add(map1);
        list.add(map2);
        map.put("questionTagList", list);
        map.put("voteCount", 0);
        map.put("answerCount", 0);
        map.put("name", "홍길동");
        map.put("createdAt", "2022-10-26T18:17:44.226658200");

        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @PatchMapping("/{question-id}/vote/plus")
    public ResponseEntity patchQuestionPlus() {
        Map<String, Object> map = new HashMap<>();
        Map<String, Object> map1 = new HashMap<>();
        Map<String, Object> map2 = new HashMap<>();
        List<Object> list = new ArrayList<>();

        map.put("questionId", 1);
        map.put("title", "제목");
        map.put("questionBody", "질문 본문");
        map1.put("tagName", "java");
        map2.put("tagName", "c++");
        list.add(map1);
        list.add(map2);
        map.put("questionTagList", list);
        map.put("voteCount", 1);
        map.put("answerCount", 0);
        map.put("name", "홍길동");
        map.put("createdAt", "2022-10-26T18:17:44.226658200");

        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @PatchMapping("/{question-id}/vote/minus")
    public ResponseEntity patchQuestionMinus() {
        Map<String, Object> map = new HashMap<>();
        Map<String, Object> map1 = new HashMap<>();
        Map<String, Object> map2 = new HashMap<>();
        List<Object> list = new ArrayList<>();

        map.put("questionId", 1);
        map.put("title", "제목");
        map.put("questionBody", "질문 본문");
        map1.put("tagName", "java");
        map2.put("tagName", "c++");
        list.add(map1);
        list.add(map2);
        map.put("questionTagList", list);
        map.put("voteCount", 0);
        map.put("answerCount", 0);
        map.put("name", "홍길동");
        map.put("createdAt", "2022-10-26T18:17:44.226658200");

        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @GetMapping  // page = 3, size = 1로 설정해 주세요!
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size) {
        Map<String, Object> map1 = new HashMap<>();
        Map<String, Object> map2 = new HashMap<>();
        Map<String, Object> map3 = new HashMap<>();
        Map<String, Object> map4 = new HashMap<>();
        Map<String, Object> map5 = new HashMap<>();
        Map<String, Object> map6 = new HashMap<>();
        Map<String, Object> map7 = new HashMap<>();
        Map<String, Object> map8 = new HashMap<>();
        Map<String, Object> map9 = new HashMap<>();
        Map<String, Object> map10 = new HashMap<>();
        Map<String, Object> map11 = new HashMap<>();
        List<Object> list1 = new ArrayList<>();
        List<Object> list2 = new ArrayList<>();
        List<Object> list3 = new ArrayList<>();
        List<Object> list4 = new ArrayList<>();
        List<Object> list5 = new ArrayList<>();
        List<Object> list6 = new ArrayList<>();

        map1.put("questionId", 1);
        map1.put("title", "제목1");
        map1.put("questionBody", "질문 본문1");
        map1.put("name", "홍길동1");
        map1.put("voteCount", 0);
        map1.put("answerCount", 1);
        map1.put("createdAt", "2022-10-26T18:17:44.226658200");
        map2.put("tagName", "java");
        map3.put("tagName", "c++");
        list1.add(map2);
        list1.add(map3);
        map1.put("questionTagList", list1);

        map4.put("questionId", 2);
        map4.put("title", "제목2");
        map4.put("questionBody", "질문 본문2");
        map4.put("name", "홍길동2");
        map4.put("voteCount", 2);
        map4.put("answerCount", 3);
        map4.put("createdAt", "2022-10-26T18:17:44.226658200");
        map5.put("tagName", "javascript");
        map6.put("tagName", "python");
        list2.add(map5);
        list2.add(map6);
        map4.put("questionTagList", list2);

        map7.put("questionId", 3);
        map7.put("title", "제목3");
        map7.put("questionBody", "질문 본문3");
        map7.put("name", "홍길동3");
        map7.put("voteCount", 4);
        map7.put("answerCount", 5);
        map7.put("createdAt", "2022-10-26T18:17:44.226658200");
        map8.put("tagName", "c#");
        map9.put("tagName", "android");
        list3.add(map8);
        list3.add(map9);
        map7.put("questionTagList", list3);

        list4.add(map1);
        list4.add(map4);
        list4.add(map7);

        map10.put("data", list4);

        map11.put("page", 3);
        map11.put("size", 1);
        map11.put("totalElements", 3);
        map11.put("totalPages", 3);

        map10.put("pageInfo", map11);

        return new ResponseEntity<>(map10, HttpStatus.OK);
    }

    @GetMapping("/answered")
    public ResponseEntity getQuestionsAnswered() {
        Map<String, Object> map1 = new HashMap<>();
        Map<String, Object> map2 = new HashMap<>();
        Map<String, Object> map3 = new HashMap<>();
        Map<String, Object> map4 = new HashMap<>();
        Map<String, Object> map5 = new HashMap<>();
        Map<String, Object> map6 = new HashMap<>();
        Map<String, Object> map7 = new HashMap<>();
        Map<String, Object> map8 = new HashMap<>();
        Map<String, Object> map9 = new HashMap<>();
        Map<String, Object> map10 = new HashMap<>();
        Map<String, Object> map11 = new HashMap<>();
        List<Object> list1 = new ArrayList<>();
        List<Object> list2 = new ArrayList<>();
        List<Object> list3 = new ArrayList<>();
        List<Object> list4 = new ArrayList<>();
        List<Object> list5 = new ArrayList<>();
        List<Object> list6 = new ArrayList<>();

        map1.put("questionId", 1);
        map1.put("title", "제목1");
        map1.put("questionBody", "질문 본문1");
        map1.put("name", "홍길동1");
        map1.put("voteCount", 0);
        map1.put("answerCount", 1);
        map1.put("createdAt", "2022-10-26T18:17:44.226658200");
        map2.put("tagName", "java");
        map3.put("tagName", "c++");
        list1.add(map2);
        list1.add(map3);
        map1.put("questionTagList", list1);

        map4.put("questionId", 2);
        map4.put("title", "제목2");
        map4.put("questionBody", "질문 본문2");
        map4.put("name", "홍길동2");
        map4.put("voteCount", 2);
        map4.put("answerCount", 3);
        map4.put("createdAt", "2022-10-26T18:17:44.226658200");
        map5.put("tagName", "javascript");
        map6.put("tagName", "python");
        list2.add(map5);
        list2.add(map6);
        map4.put("questionTagList", list2);

        map7.put("questionId", 3);
        map7.put("title", "제목3");
        map7.put("questionBody", "질문 본문3");
        map7.put("name", "홍길동3");
        map7.put("voteCount", 4);
        map7.put("answerCount", 5);
        map7.put("createdAt", "2022-10-26T18:17:44.226658200");
        map8.put("tagName", "c#");
        map9.put("tagName", "android");
        list3.add(map8);
        list3.add(map9);
        map7.put("questionTagList", list3);

        list4.add(map1);
        list4.add(map4);
        list4.add(map7);

        map10.put("data", list4);

        map11.put("page", 3);
        map11.put("size", 1);
        map11.put("totalElements", 3);
        map11.put("totalPages", 3);

        map10.put("pageInfo", map11);

        return new ResponseEntity<>(map10, HttpStatus.OK);
    }

    @GetMapping("/unanswered")
    public ResponseEntity getQuestionsUnanswered() {
        Map<String, Object> map1 = new HashMap<>();
        Map<String, Object> map2 = new HashMap<>();
        Map<String, Object> map3 = new HashMap<>();
        Map<String, Object> map4 = new HashMap<>();
        Map<String, Object> map5 = new HashMap<>();
        Map<String, Object> map6 = new HashMap<>();
        Map<String, Object> map7 = new HashMap<>();
        Map<String, Object> map8 = new HashMap<>();
        Map<String, Object> map9 = new HashMap<>();
        Map<String, Object> map10 = new HashMap<>();
        Map<String, Object> map11 = new HashMap<>();
        List<Object> list1 = new ArrayList<>();
        List<Object> list2 = new ArrayList<>();
        List<Object> list3 = new ArrayList<>();
        List<Object> list4 = new ArrayList<>();
        List<Object> list5 = new ArrayList<>();
        List<Object> list6 = new ArrayList<>();

        map1.put("questionId", 1);
        map1.put("title", "제목1");
        map1.put("questionBody", "질문 본문1");
        map1.put("name", "홍길동1");
        map1.put("voteCount", 0);
        map1.put("answerCount", 0);
        map1.put("createdAt", "2022-10-26T18:17:44.226658200");
        map2.put("tagName", "java");
        map3.put("tagName", "c++");
        list1.add(map2);
        list1.add(map3);
        map1.put("questionTagList", list1);

        map4.put("questionId", 2);
        map4.put("title", "제목2");
        map4.put("questionBody", "질문 본문2");
        map4.put("name", "홍길동2");
        map4.put("voteCount", 2);
        map4.put("answerCount", 0);
        map4.put("createdAt", "2022-10-26T18:17:44.226658200");
        map5.put("tagName", "javascript");
        map6.put("tagName", "python");
        list2.add(map5);
        list2.add(map6);
        map4.put("questionTagList", list2);

        map7.put("questionId", 3);
        map7.put("title", "제목3");
        map7.put("questionBody", "질문 본문3");
        map7.put("name", "홍길동3");
        map7.put("voteCount", 4);
        map7.put("answerCount", 0);
        map7.put("createdAt", "2022-10-26T18:17:44.226658200");
        map8.put("tagName", "c#");
        map9.put("tagName", "android");
        list3.add(map8);
        list3.add(map9);
        map7.put("questionTagList", list3);

        list4.add(map1);
        list4.add(map4);
        list4.add(map7);

        map10.put("data", list4);

        map11.put("page", 3);
        map11.put("size", 1);
        map11.put("totalElements", 3);
        map11.put("totalPages", 3);

        map10.put("pageInfo", map11);

        return new ResponseEntity<>(map10, HttpStatus.OK);
    }
}
