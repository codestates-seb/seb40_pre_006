package com.codestates.preproject.answer.service;

import com.codestates.preproject.answer.dto.AnswerDto;
import com.codestates.preproject.answer.entity.Answer;
import com.codestates.preproject.answer.repository.AnswerRepository;
import com.codestates.preproject.question.entity.Question;
import com.codestates.preproject.user.entity.User;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static java.time.LocalTime.now;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {

        this.answerRepository = answerRepository;
    }

    public Answer createAnswer(Answer answer) {
        // answer객체 안에 있는 userId를 이용해서 userRepository에서
        // 해당 id의 user 객체를 다시 answer에 넣어준다.
        // question 객체 안에 있는 questionId를 이용해서 questionRepository에서
        // 해당 id의 question 객체를 다시 answer에 넣어준다.

        User user = new User();
        Question question = new Question();

        user.setUserId(answer.getUser().getUserId());
        question.setQuestionId(answer.getQuestion().getQuestionId());
        answer.setAnswerId(1L);
        answer.setUser(user);
        answer.setQuestion(question);

        return answer;
    }

    public List<Answer> findAnswers(long questionId) {
//        List<Answer> answers = new ArrayList<>();

        User user = new User();
        Question question = new Question();

        user.setUserId(1L);
        question.setQuestionId(1L);
        List<Answer> answers = List.of(
                new Answer(1L, "댓글1", LocalDateTime.now(), question, user),
                new Answer(2L, "댓글1", LocalDateTime.now(), question, user),
                new Answer(3L, "댓글1", LocalDateTime.now(), question, user)
        );
        return answers;
    }
}
