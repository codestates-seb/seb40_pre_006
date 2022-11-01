package com.codestates.preproject.question.repository;


import com.codestates.preproject.question.entity.Question;
import com.codestates.preproject.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.List;

@EnableJpaRepositories
public interface QuestionRepository extends JpaRepository<Question, Long> {
    Question findByQuestionId(Long questionId);
    List<Question> findAllByUser(User user);
}
