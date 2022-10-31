package com.codestates.preproject.answer.mapper;

import com.codestates.preproject.answer.dto.AnswerDto;
import com.codestates.preproject.answer.entity.Answer;
import com.codestates.preproject.question.entity.Question;
import com.codestates.preproject.user.entity.User;
import org.mapstruct.Mapper;

import java.time.LocalDateTime;
import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
//    Answer answerPostDtoToAnswer(AnswerDto.Post requestBody);
//    AnswerDto.Response answerToAnswerResponseDto(Answer answer);
    List<AnswerDto.Response> answersToAnswerResponseDtos(List<Answer> answers);

    default Answer answerPostDtoToAnswer(AnswerDto.Post requestBody) {
        Answer answer = new Answer();
        User user = new User();
        Question question = new Question();

        user.setUserId(requestBody.getUserId());
        question.setQuestionId(requestBody.getQuestionId());

        answer.setAnswerBody(requestBody.getAnswerBody());
        answer.setUser(user);
        answer.setQuestion(question);
        answer.setCreatedAt(LocalDateTime.now());

        return answer;
    }

    default AnswerDto.Response answerToAnswerResponseDto(Answer answer) {
        AnswerDto.Response response = new AnswerDto.Response();

        response.setAnswerId(answer.getAnswerId());
        response.setAnswerBody(answer.getAnswerBody());
        response.setCreatedAt(answer.getCreatedAt());
        response.setUserId(answer.getUser().getUserId());
        response.setQuestionId(answer.getQuestion().getQuestionId());

        return response;
    }
}