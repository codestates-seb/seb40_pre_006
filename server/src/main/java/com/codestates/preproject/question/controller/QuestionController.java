package com.codestates.preproject.question.controller;

import com.codestates.preproject.dto.MultiResponseDto;
import com.codestates.preproject.dto.SingleResponseDto;
import com.codestates.preproject.question.dto.QuestionPatchDto;
import com.codestates.preproject.question.dto.QuestionPostDto;
import com.codestates.preproject.question.dto.QuestionResponseDto;
import com.codestates.preproject.question.dto.QuestionVoteDto;
import com.codestates.preproject.question.entity.Question;
import com.codestates.preproject.question.mapper.QuestionMapper;
import com.codestates.preproject.question.service.QuestionService;
import com.codestates.preproject.question.service.QuestionTagService;
import com.codestates.preproject.user.mapper.UserMapper;
import com.codestates.preproject.user.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/question")
@Validated
public class QuestionController {

    private final QuestionService questionService;
    private final QuestionMapper mapper;
    private final UserService userService;
    private final UserMapper userMapper;
    private final QuestionTagService questionTagService;

    public QuestionController(QuestionService questionService, QuestionMapper mapper, UserService userService, UserMapper userMapper, QuestionTagService questionTagService) {
        this.questionService = questionService;
        this.mapper = mapper;
        this.userService = userService;
        this.userMapper = userMapper;
        this.questionTagService = questionTagService;
    }

    // 질문 등록
    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto) {

        Question question = questionService.createQuestion(mapper.questionPostToQuestion(userService, questionPostDto));
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponse(userMapper, question))
                , HttpStatus.CREATED);
    }

    // 질문 수정
    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
                                        @Valid @RequestBody QuestionPatchDto requestBody) {
        requestBody.setQuestionId(questionId);

        Question question =
                questionService.updateQuestion(mapper.questionPatchDtoToQuestion(requestBody));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)),
                HttpStatus.OK);
    }

    // 투표하기 Vote=true +1, 투표 취소하기 Vote=false -1
    @PatchMapping("/{question-id}/vote")
    public ResponseEntity patchVote(@PathVariable("question-id") @Positive Long questionId,
                                    @RequestParam Boolean vote,
                                    @Valid @RequestBody QuestionVoteDto questionVoteDto) {
        questionVoteDto.setQuestionId(questionId);

        Question question = questionService.voteQuestion(mapper.questionVoteToQuestion(questionVoteDto),
                vote);
        return new ResponseEntity<>(
                    new SingleResponseDto<>(mapper.questionToQuestionResponse(userMapper, question))
                    , HttpStatus.OK);
    }

    // 특정 게시글 조회
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive Long questionId) {

        Question question = questionService.findGetQuestion(questionId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponse(userMapper, question)),
                HttpStatus.OK);
    }


    // 전체 게시글 조회
    @GetMapping  // page = 1, size = 10으로 설정해 주세요!
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size) {
        Page<Question> pageQuestions = questionService.findQuestions(page-1, size);
        List<Question> questions = pageQuestions.getContent();
        List<QuestionResponseDto> response =
                questions.stream()
                        .map(question -> mapper.questionToQuestionResponse(userMapper, question))
                        .collect(Collectors.toList());

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponses(questions),pageQuestions),
                HttpStatus.OK);
    }

    // 필터링 된 게시글 - 답변 완료
    @GetMapping("/answered")
    public ResponseEntity getQuestionsAnswered(@Positive @RequestParam int page,
                                               @Positive @RequestParam int size) {
        Page<Question> pageQuestions = questionService.findAnsweredQuestions(page - 1, size);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponseDtos(questions),
                        pageQuestions), HttpStatus.OK);
    }

    // 필터링 된 게시글 - 답변 미완료
    @GetMapping("/unanswered")
    public ResponseEntity getQuestionsUnanswered(@Positive @RequestParam int page,
                                                 @Positive @RequestParam int size) {
        Page<Question> pageQuestions = questionService.findUnansweredQuestions(page - 1, size);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponseDtos(questions),
                        pageQuestions), HttpStatus.OK);
    }

    // 게시글 삭제
    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive Long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
