package com.codestates.preproject.question.dto;

import lombok.Getter;

@Getter
public class QuestionPatchDto {
    private Long questionId;

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }
}
