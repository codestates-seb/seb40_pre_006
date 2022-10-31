package com.codestates.preproject.question.service;

import com.codestates.preproject.question.entity.Question;
import com.codestates.preproject.question.entity.QuestionTag;
import com.codestates.preproject.question.repository.QuestionRepository;
import com.codestates.preproject.tag.entity.Tag;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)
public class QuestionService {

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    private final QuestionRepository questionRepository;

    public Question createQuestion(Question question) {
        Question question2 = new Question(1L, question.getTitle(), question.getQuestionBody(), "이게왜되지?",
                0, 1, LocalDateTime.now(), question.getQuestionTagList());
        return question2;

//        return questionRepository.save(question);
    }

    public Question upVoteQuestion(Question question) {
        Tag tag1 = new Tag();
        Tag tag2 = new Tag();
        tag1.setTagName("java");
        tag2.setTagName("C++");
        QuestionTag questionTag1 = new QuestionTag();
        QuestionTag questionTag2 = new QuestionTag();
        questionTag1.setTag(tag1);
        questionTag2.setTag(tag2);
        List<QuestionTag> questionTagList = new ArrayList<>();
        questionTagList.add(questionTag1);
        questionTagList.add(questionTag2);
        int voteCount = 0;
        Question question1 = new Question(1L, "질문 등록 title 입니다.", "질문 내용입니다. 최소 20자입니다.", "이게왜되지?",
                voteCount+1, 1, LocalDateTime.now(), questionTagList);
        return question1;
    }

    public Question downVoteQuestion(Question question) {
        Tag tag1 = new Tag();
        Tag tag2 = new Tag();
        tag1.setTagName("java");
        tag2.setTagName("C++");
        QuestionTag questionTag1 = new QuestionTag();
        QuestionTag questionTag2 = new QuestionTag();
        questionTag1.setTag(tag1);
        questionTag2.setTag(tag2);
        List<QuestionTag> questionTagList = new ArrayList<>();
        questionTagList.add(questionTag1);
        questionTagList.add(questionTag2);
        int voteCount = 0;
        Question question1 = new Question(1L, "질문 등록 title 입니다.", "질문 내용입니다. 최소 20자입니다.", "이게왜되지?",
                voteCount-1, 1, LocalDateTime.now(), questionTagList);
        return question1;
    }

    public Question findQuestion(long questionId) {
        Tag tag1 = new Tag();
        Tag tag2 = new Tag();
        tag1.setTagName("java");
        tag2.setTagName("C++");
        QuestionTag questionTag1 = new QuestionTag();
        QuestionTag questionTag2 = new QuestionTag();
        questionTag1.setTag(tag1);
        questionTag2.setTag(tag2);
        List<QuestionTag> questionTagList = new ArrayList<>();
        questionTagList.add(questionTag1);
        questionTagList.add(questionTag2);

        Question question = new Question(1L, "질문 등록 title 입니다.", "질문 내용입니다. 최소 20자입니다.", "이게왜되지?",
                0, 1, LocalDateTime.now(), questionTagList);
        return question;
    }

    public Page<Question> findQuestions(int page, int size) {
        Tag tag1 = new Tag();
        Tag tag2 = new Tag();
        tag1.setTagName("java");
        tag2.setTagName("C++");
        QuestionTag questionTag1 = new QuestionTag();
        QuestionTag questionTag2 = new QuestionTag();
        questionTag1.addTag(tag1);
        questionTag2.addTag(tag2);
        List<QuestionTag> questionTagList = new ArrayList<>();
        questionTagList.add(questionTag1);
        questionTagList.add(questionTag2);

        List<Question> question = List.of(
                new Question(1L, "질문 등록1 title 입니다.", "질문 내용1입니다. 최소 20자입니다.", "이게왜되지?",
                        0, 1, LocalDateTime.now(), questionTagList),
                new Question(2L, "질문 등록2 title 입니다.", "질문 내용2입니다. 최소 20자입니다.", "이게왜되지?",
                        0, 0, LocalDateTime.now(), questionTagList),
                new Question(3L, "질문 등록3 title 입니다.", "질문 내용3입니다. 최소 20자입니다.", "이게왜되지?",
                        0, 3, LocalDateTime.now(), questionTagList),
                new Question(4L, "질문 등록4 title 입니다.", "질문 내용4입니다. 최소 20자입니다.", "이게왜되지?",
                        0, 0, LocalDateTime.now(), questionTagList),
                new Question(5L, "질문 등록5 title 입니다.", "질문 내용5입니다. 최소 20자입니다.", "이게왜되지?",
                        0, 2, LocalDateTime.now(), questionTagList),
                new Question(6L, "질문 등록6 title 입니다.", "질문 내용6입니다. 최소 20자입니다.", "이게왜되지?",
                        0, 0,LocalDateTime.now(), questionTagList),
                new Question(7L, "질문 등록7 title 입니다.", "질문 내용7입니다. 최소 20자입니다.", "이게왜되지?",
                        0, 1,LocalDateTime.now(), questionTagList),
                new Question(8L, "질문 등록8 title 입니다.", "질문 내용8입니다. 최소 20자입니다.", "이게왜되지?",
                        0, 0,LocalDateTime.now(), questionTagList),
                new Question(9L, "질문 등록9 title 입니다.", "질문 내용9입니다. 최소 20자입니다.", "이게왜되지?",
                        0, 2,LocalDateTime.now(), questionTagList),
                new Question(10L, "질문 등록10 title 입니다.", "질문 내용10입니다. 최소 20자입니다.", "이게왜되지?",
                        0, 0,LocalDateTime.now(), questionTagList),
                new Question(11L, "질문 등록11 title 입니다.", "질문 내용11입니다. 최소 20자입니다.", "이게왜되지?",
                        0, 3,LocalDateTime.now(), questionTagList),
                new Question(12L, "질문 등록12 title 입니다.", "질문 내용12입니다. 최소 20자입니다.", "이게왜되지?",
                        0, 0,LocalDateTime.now(), questionTagList));

//        Page<Question> questions = new PageImpl<>(question.subList(page, size), pageable, question.size()); // 수정 필요
        Page<Question> questions = new PageImpl<>(question); // 수정 필요
        return questions;
    }

}
