package com.codestates.preproject.answer.repository;

import com.codestates.preproject.answer.entity.Answer;
import com.codestates.preproject.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    List<Answer> findAllByQuestion(Question question);
}
