package com.codestates.preproject.question.service;

import com.codestates.preproject.answer.service.AnswerService;
import com.codestates.preproject.exception.BusinessLogicException;
import com.codestates.preproject.exception.ExceptionCode;
import com.codestates.preproject.question.entity.Question;
import com.codestates.preproject.question.entity.QuestionTag;
import com.codestates.preproject.question.repository.QuestionRepository;
import com.codestates.preproject.question.repository.QuestionTagRepository;
import com.codestates.preproject.tag.entity.Tag;
import com.codestates.preproject.tag.repository.TagRepository;
import com.codestates.preproject.tag.service.TagService;
import com.codestates.preproject.user.entity.User;
import com.codestates.preproject.user.repository.UserRepository;
import com.codestates.preproject.user.service.UserService;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final QuestionTagRepository questionTagRepository;
    private final UserService userService;
    private final UserRepository userRepository;
    private final TagService tagService;
    private final TagRepository tagRepository;

    public QuestionService(QuestionRepository questionRepository, QuestionTagRepository questionTagRepository,
                           UserService userService, UserRepository userRepository,
                           TagService tagService, TagRepository tagRepository) {
        this.questionRepository = questionRepository;
        this.questionTagRepository = questionTagRepository;
        this.userService = userService;
        this.userRepository = userRepository;
        this.tagService = tagService;
        this.tagRepository = tagRepository;
    }


    public Question createQuestion(Question question) {
        User user = userRepository.findByUserId(question.getUser().getUserId());
        question.setUser(user);

        Question question1 = questionRepository.save(question);
        List<QuestionTag> questionTagList = new ArrayList<>();
        for (int i = 0; i < question.getQuestionTagList().size(); i++) {

            Tag tag = new Tag();
            tag.setTagName(question.getQuestionTagList().get(i).getTag().getTagName());
            tagRepository.save(tag);

            question.getQuestionTagList().get(i).setQuestion(question1);
            question.getQuestionTagList().get(i).setTag(tag);

            QuestionTag questionTag = questionTagRepository.save(question.getQuestionTagList().get(i));
            questionTagList.add(questionTag);
        }
        question1.setQuestionTagList(questionTagList);
        updateQuestionCount(question1);
        return questionRepository.save(question);
    }
    public Question voteQuestion(Question question, Boolean vote) {
        Question findQuestion = questionRepository.findByQuestionId(question.getQuestionId());
//        findQuestion.setQuestionId(question.getQuestionId());
        if (vote.equals(true)) {
            findQuestion.setVoteCount(findQuestion.getVoteCount() + 1);
        } else {
            findQuestion.setVoteCount(findQuestion.getVoteCount() - 1);
        }
        Question question1 = questionRepository.save(findQuestion);
        return question1;
    }

    public Question findQuestion(long questionId) {
        return findVerifyQuestion(questionId);
    }

    public Page<Question> findQuestions(int page, int size) {
        return questionRepository.findAll(PageRequest.of(page, size, Sort.by("questionId").descending()));
    }

    @Transactional(readOnly = true)
    private Question findVerifyQuestion(Long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question question = optionalQuestion.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return question;
    }

    private void VerifiedNoQuestion(Page<Question> findAllQuestion){
        if(findAllQuestion.getTotalElements() == 0){
            throw new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND);
        }
    }

    private void updateQuestionCount(Question question) {
        User user = userService.findUser(question.getUser().getUserId());
        user.setQuestionCount(user.getQuestionCount() + 1);

        userService.updateUser(user);
    }

    private void updateTagCount(Tag tag) {
        Tag tag1 = tagService.findTag(tag.getTagId());
        tag1.setTagCount(tag1.getTagCount() + 1);

        tagService.updateTag(tag1);
    }

//    private void verifyQuestion(Question question) {
//        // 유저가 존재하는 지 확인
//        UserService.findVerifiedUSer(question.getUser().getUserId());
//
//        // 태그가 존재하는 지 확인
//        question.getQuestionTagList().stream()
//                .forEach(questionTag -> tagService.findVerifiedTag(questionTag.getTag().getTagId()));
//    }

}
