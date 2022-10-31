package com.codestates.preproject.answer.dto;

import com.codestates.preproject.question.entity.Question;
import com.codestates.preproject.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

public class AnswerDto {
    @Getter
    public static class Post {
        private long questionId;
        private long userId;
        private String answerBody;
    }

    @Setter
    @Getter
    public static class Response {
        private long answerId;
        private String answerBody;
        private LocalDateTime createdAt;
        private long userId;
        private long questionId;

//        public String getUserName() {
//            return user.getName();
//        }
//
//        public long getQuestionId() {
//            return question.getQuestionId();
//        }
    }
}