package com.codestates.preproject.question.dto;

import lombok.Getter;

@Getter
public class QuestionPatchDto {
    private Long questionId;
    private int voteCount;

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }
}
