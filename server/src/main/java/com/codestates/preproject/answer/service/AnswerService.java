package com.codestates.preproject.answer.service;

import com.codestates.preproject.answer.entity.Answer;
import com.codestates.preproject.answer.repository.AnswerRepository;
import com.codestates.preproject.question.entity.Question;
import com.codestates.preproject.question.repository.QuestionRepository;
import com.codestates.preproject.question.service.QuestionService;
import com.codestates.preproject.user.entity.User;
import com.codestates.preproject.user.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final QuestionService questionService;
    private final UserService userService;
    private final QuestionRepository questionRepository;
    private final UserRepository userRepository;

    public AnswerService(AnswerRepository answerRepository, QuestionService questionService, UserService userService, QuestionRepository questionRepository, UserRepository userRepository) {
        this.answerRepository = answerRepository;
        this.questionService = questionService;
        this.userService = userService;
        this.questionRepository = questionRepository;
        this.userRepository = userRepository;
    }

    public Answer createAnswer(Answer answer) {

        Question question = questionRepository.findByQuestionId(answer.getQuestion().getQuestionId());
        User user = userRepository.findByUserId(answer.getUser().getUserId());

        answer.setQuestion(question);
        answer.setUser(user);

        updateAnswerCount(answer);

        return answerRepository.save(answer);
    }

    public void verifyExistsQuestionIdAndUserId(Answer answer) {
        questionService.VerifyQuestionId(answer.getQuestion().getQuestionId());
        userService.VerifyUserId(answer.getUser().getUserId());
    }

    public List<Answer> findAnswers(long questionId) {
        Question question = questionRepository.findByQuestionId(questionId);
        return answerRepository.findAllByQuestion(question);
    }

    private void updateAnswerCount(Answer answer) {
        Question question = questionService.findQuestion(answer.getQuestion().getQuestionId());
        question.setAnswerCount(question.getAnswerCount() + 1);

        questionService.updateQuestion1(question);
    }
}