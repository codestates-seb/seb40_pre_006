package com.codestates.preproject.exception;

import lombok.Getter;

public enum ExceptionCode {
    USER_NOT_FOUND(404, "User not found"),
    USER_EXISTS(409, "User exists"),
    ANSWER_NOT_FOUND(404, "Answer not found"),
    QUESTION_NOT_FOUND(404, "Question not found"),
    CANNOT_CHANGE_QUESTION(403, "Question can not change"),
    NOT_IMPLEMENTATION(501, "Not Implementation");


    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
