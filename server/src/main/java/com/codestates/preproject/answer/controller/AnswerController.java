package com.codestates.preproject.answer.controller;

import com.codestates.preproject.answer.dto.AnswerDto;
import com.codestates.preproject.answer.entity.Answer;
import com.codestates.preproject.answer.mapper.AnswerMapper;
import com.codestates.preproject.answer.service.AnswerService;
import com.codestates.preproject.dto.SingleResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/answer")
@Validated
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerDto.Post requestBody) {
        Answer answer = answerService.createAnswer(mapper.answerPostDtoToAnswer(requestBody));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer)), HttpStatus.CREATED);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getAnswers(@PathVariable("question-id") Long questionId){
        List<Answer> answers = answerService.findAnswers(questionId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answersToAnswerResponseDtos(answers)), HttpStatus.OK);
    }
}