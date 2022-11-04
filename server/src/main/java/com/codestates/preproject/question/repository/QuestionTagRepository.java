package com.codestates.preproject.question.repository;

import com.codestates.preproject.question.entity.QuestionTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface QuestionTagRepository extends JpaRepository<QuestionTag, Long> {
    @Query(value = "select * from question_tag where question_id = :questionId",nativeQuery = true)
    List<QuestionTag> findAllByQuestionId(@Param("questionId") Long questionId);
}
