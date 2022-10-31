package com.codestates.preproject.question.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter @Setter
public class QuestionResponseDto {
    private Long questionId;
    //    private Long userId;
    private String title;
    private String questionBody;
    private List<QuestionTagResponseDto> questionTagList;

    private String name;
    private int voteCount;
    private int answerCount;
    private LocalDateTime createAt;

}
