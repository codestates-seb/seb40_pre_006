package com.codestates.preproject.question.repository;


import com.codestates.preproject.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {

}
