package com.codestates.preproject.question.dto;

import com.codestates.preproject.user.dto.UserDto;
import com.codestates.preproject.user.entity.User;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter @Setter
public class QuestionResponseDto {
    private Long questionId;
    private String title;
    private String questionBody;
    private List<QuestionTagResponseDto> questionTagList;

    private Long userId;
    private String name;
    private int voteCount;
    private int answerCount;
    private LocalDateTime createdAt;

    public void setUser(UserDto.Response userToUserResponseDto) {
        this.name = userToUserResponseDto.getName();
        this.userId = userToUserResponseDto.getUserId();
    }
}
