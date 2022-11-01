package com.codestates.preproject.question.dto;

import lombok.Getter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
public class QuestionTagDto {
    @Positive
    private Long tagId;

    @NotNull(message = "태그를 작성해 주세요")
    private String tagName;
}
