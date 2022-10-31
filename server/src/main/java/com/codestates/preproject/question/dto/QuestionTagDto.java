package com.codestates.preproject.question.dto;

import lombok.Getter;

import javax.validation.constraints.Positive;

@Getter
public class QuestionTagDto {
    @Positive
    private Long tagId;
    private String tagName;
}
