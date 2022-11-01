package com.codestates.preproject.answer.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

public class AnswerDto {
    @Getter
    public static class Post {
        private Long questionId;
        private Long userId;
        private String answerBody;
    }

    @Setter
    @Getter
    public static class Response {
        private Long answerId;
        private String answerBody;
        private LocalDateTime createdAt;
        //        private long userId;
        private String name;
        private Long questionId;
    }
}