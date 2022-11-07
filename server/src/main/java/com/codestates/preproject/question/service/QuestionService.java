package com.codestates.preproject.question.service;

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
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
        createTag(question);
        upQuestionCount(question);
        return questionRepository.save(question);
    }

    // 게시글 내용 수정
    public Question updateQuestion(Question question) {
        Question findQuestion = questionRepository.findByQuestionId(question.getQuestionId());

        Optional.ofNullable(question.getQuestionBody())
                .ifPresent(questionBody -> findQuestion.setQuestionBody(questionBody));

        return questionRepository.save(findQuestion);
    }

    public Question voteQuestion(Question question, Boolean vote) {
        Question findQuestion = questionRepository.findByQuestionId(question.getQuestionId());
        if (vote.equals(true)) {
            findQuestion.setVoteCount(findQuestion.getVoteCount() + 1);
        } else {
            findQuestion.setVoteCount(findQuestion.getVoteCount() - 1);
        }
        Question question1 = questionRepository.save(findQuestion);
        return question1;
    }

    public Question findQuestion(Long questionId) {
        return findVerifyQuestion(questionId);
    }

    public Question findGetQuestion(Long questionId) {
        Question question = findVerifyQuestion(questionId);
        question.setViewCount(question.getViewCount() + 1);
        questionRepository.save(question);
        return question;
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

    public Question VerifyQuestionId(Long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }

    private void upQuestionCount(Question question) {
        User user = userService.findUser(question.getUser().getUserId());
        user.setQuestionCount(user.getQuestionCount() + 1);

        userService.updateUser(user);
    }

    private void downQuestionCount(Question question) {
        User user = userService.findUser(question.getUser().getUserId());
        user.setQuestionCount(user.getQuestionCount() - 1);

        userService.updateUser(user);
    }

    public Page<Question> findAnsweredQuestions(int page, int size) {
        List<Question> list = questionRepository.findByAnswerCountGreaterThan(0)
                .stream().sorted(Comparator.comparing(Question::getQuestionId).reversed())
                .collect(Collectors.toList());
        PageRequest pageRequest = PageRequest.of(page, size);
        int start = (int) pageRequest.getOffset();
        int end = Math.min((start + pageRequest.getPageSize()), list.size());
        Page<Question> questionPage = new PageImpl<>(list.subList(start, end), pageRequest, list.size());
        return questionPage;
    }

    public Page<Question> findUnansweredQuestions(int page, int size) {
        List<Question> list = questionRepository.findByAnswerCountLessThanEqual(0)
                .stream().sorted(Comparator.comparing(Question::getQuestionId).reversed())
                .collect(Collectors.toList());
        PageRequest pageRequest = PageRequest.of(page, size);
        int start = (int) pageRequest.getOffset();
        int end = Math.min((start + pageRequest.getPageSize()), list.size());
        Page<Question> questionPage = new PageImpl<>(list.subList(start, end), pageRequest, list.size());
        return questionPage;
    }

    public void deleteQuestion(Long questionId) {
        Question question = findVerifyQuestion(questionId);
        deleteTag(question);
        downQuestionCount(question);
        questionRepository.delete(question);

    }

    public void createTag(Question question) {
        Question question1 = questionRepository.save(question);
        List<QuestionTag> questionTagList = new ArrayList<>();
        for (int i = 0; i < question.getQuestionTagList().size(); i++){
            Tag tag = new Tag();
            tag.setTagName(question.getQuestionTagList().get(i).getTag().getTagName().toLowerCase());
            tag.setTagCount(tag.getTagCount() + 1);
            if (!tagRepository.findByTagName(tag.getTagName()).isPresent()) {
                tagRepository.save(tag);
                question.getQuestionTagList().get(i).setTag(tag);
            } else {
                List<Tag> list = tagRepository.findAll().stream()
                        .filter(a -> a.getTagName().equals(tag.getTagName()))
                        .collect(Collectors.toList());
                Tag tag1 = list.get(0);
                question.getQuestionTagList().get(i).setTag(tag1);
                tag1.setTagCount(tag1.getTagCount() + 1);
            }

            question.getQuestionTagList().get(i).setQuestion(question1);
            QuestionTag questionTag = questionTagRepository.save(question.getQuestionTagList().get(i));
            questionTagList.add(questionTag);
        }
        question1.setQuestionTagList(questionTagList);
    }

    public void deleteTag(Question question) {
        for (int i = 0; i < question.getQuestionTagList().size(); i++) {
            Optional<Tag> tag = tagRepository.findByTagName(question.getQuestionTagList().get(i).getTag().getTagName());
            if(tag.isPresent()) {
                Tag tag1 = tag.get();
                tag1.setTagCount(tag1.getTagCount() - 1);
                tagRepository.save(tag1);
            }
        }
    }
}
