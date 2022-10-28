package com.codestates.preproject.question.dto;

import com.codestates.preproject.question.entity.QuestionTag;
import com.codestates.preproject.user.entity.User;
import lombok.Getter;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
public class QuestionPostDto {
    @Positive
    private Long userId;
    private String title;
    @NotBlank(message = "질문을 작성해 주세요.")
    @Size(min = 20, message = "최소 20자이상 작성해야 합니다.")
    private String questionBody;
    @Valid
    private List<QuestionTag> questionTagList;

    public Long getUserId() {
        return userId;
    }

    public String getTitle() {
        return title;
    }

    public String getQuestionBody() {
        return questionBody;
    }

    public List<QuestionTag> getQuestionTagList() {
        return questionTagList;
    }

    public User getUser(){
        User user = new User();
        user.setUserId(userId);
        return user;
    }
}
