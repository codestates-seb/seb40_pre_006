package com.codestates.preproject.question.dto;

import lombok.Builder;
import lombok.Getter;

@Getter @Builder
public class QuestionTagResponseDto {
    private Long tagId;
    private String tagName;
}
