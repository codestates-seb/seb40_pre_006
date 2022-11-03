package com.codestates.preproject.question.service;

import com.codestates.preproject.question.entity.Question;
import com.codestates.preproject.question.entity.QuestionTag;
import com.codestates.preproject.question.repository.QuestionTagRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuestionTagService {

    private final QuestionTagRepository questionTagRepository;

    public QuestionTagService(QuestionTagRepository questionTagRepository) {
        this.questionTagRepository = questionTagRepository;
    }

    public List<QuestionTag> createQuestionTags(List<QuestionTag> questionTags){
        return questionTags.stream().map(questionTag -> questionTagRepository.save(questionTag)).collect(Collectors.toList());
    }

    public List<QuestionTag> findVerifiedQuestionTags(Question question) {
        List<QuestionTag> findQuestionTagList = questionTagRepository.findAllByQuestionId(question.getQuestionId());
        return findQuestionTagList;
    }

}
