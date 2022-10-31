package com.codestates.preproject.question.controller;

import com.codestates.preproject.dto.MultiResponseDto;
import com.codestates.preproject.dto.SingleResponseDto;
import com.codestates.preproject.question.dto.QuestionPatchDto;
import com.codestates.preproject.question.dto.QuestionPostDto;
import com.codestates.preproject.question.dto.QuestionResponseDto;
import com.codestates.preproject.question.entity.Question;
import com.codestates.preproject.question.mapper.QuestionMapper;
import com.codestates.preproject.question.service.QuestionService;
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
//    private final UserService userService;

    public QuestionController(QuestionService questionService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
    }

    // 질문 등록
    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto) {
        Question question = mapper.questionPostToQuestion(questionPostDto);
        Question response = questionService.createQuestion(question);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponse(response)),
                HttpStatus.CREATED);

//        Question question = questionService.createQuestion(mapper.questionPostToQuestion(questionPostDto));
//        return new ResponseEntity<>(
//                new SingleResponseDto<>(mapper.questionToQuestionResponse(question))
//                , HttpStatus.CREATED);
    }

    // 특정 게시글 조회
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive Long questionId) {

        Question response = questionService.findQuestion(questionId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponse(response)),HttpStatus.OK);

//        Question question = questionService.findQuestion(questionId);
//        return new ResponseEntity<>(
//                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)),
//                HttpStatus.OK);
    }

    // 투표하기
    @PatchMapping("/{question-id}/vote/plus")
    public ResponseEntity patchQuestionPlus(@PathVariable("question-id") @Positive Long questionId,
                                            @Valid @RequestBody QuestionPatchDto questionPatchDto) {
        questionPatchDto.setQuestionId(questionId);
        Question response = questionService.upVoteQuestion(mapper.questionPatchToQuestion(questionPatchDto));
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponse(response)),
                HttpStatus.OK);

//        Question question = questionService.updateQuestion(mapper.questionPatchToQuestion(questionPatchDto));
//        return new ResponseEntity<>(
//                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question))
//                , HttpStatus.OK);
    }

    // 투표 취소하기
    @PatchMapping("/{question-id}/vote/minus")
    public ResponseEntity patchQuestionMinus(@PathVariable("question-id") @Positive Long questionId,
                                             @Valid @RequestBody QuestionPatchDto questionPatchDto) {

        questionPatchDto.setQuestionId(questionId);
        Question response = questionService.downVoteQuestion(mapper.questionPatchToQuestion(questionPatchDto));
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponse(response)),
                HttpStatus.OK);

//        questionPatchDto.setQuestionId(questionId);
//        Question question = questionService.updateQuestion(mapper.questionPatchToQuestion(questionPatchDto));
//        return new ResponseEntity<>(
//                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question))
//                , HttpStatus.OK);
    }

    // 전체 게시글 조회
    @GetMapping  // page = 1, size = 10으로 설정해 주세요!
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size) {
        Page<Question> pageQuestions = questionService.findQuestions(page-1, size);
        List<Question> questions = pageQuestions.getContent();
        List<QuestionResponseDto> response =
                questions.stream()
                        .map(question -> mapper.questionToQuestionResponse(question))
                        .collect(Collectors.toList());

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponses(questions),pageQuestions),
                HttpStatus.OK);
    }

    // 필터링 된 게시글 - 답변 완료
    @GetMapping("/answered")
    public ResponseEntity getQuestionsAnswered(@Positive @RequestParam int page,
                                               @Positive @RequestParam int size) {
        Page<Question> pageQuestions = questionService.findQuestions(page-1, size);
        List<Question> questions = pageQuestions.getContent()
                .stream()
                .filter(i -> i.getAnswerCount() >= 1)
                .collect(Collectors.toList());
        List<QuestionResponseDto> response =
                questions.stream()
                        .map(question -> mapper.questionToQuestionResponse(question))
                        .filter(i -> i.getAnswerCount() >= 1)
                        .collect(Collectors.toList());

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponses(questions),pageQuestions),
                HttpStatus.OK);

//        Page<Question> pageQuestions = questionService.findQuestions(page-1, size);
//        List<Question> questions = pageQuestions.getContent();
//        return new ResponseEntity<>(
//                new MultiResponseDto<>(mapper.questionListToQuestionResponseDtos(questions),pageQuestions),
//                HttpStatus.OK);
    }

    // 필터링 된 게시글 - 답변 미완료
    @GetMapping("/unanswered")
    public ResponseEntity getQuestionsUnanswered(@Positive @RequestParam int page,
                                                 @Positive @RequestParam int size) {
        Page<Question> pageQuestions = questionService.findQuestions(page-1, size);
        List<Question> questions = pageQuestions.getContent()
                .stream()
                .filter(i -> i.getAnswerCount() == 0)
                .collect(Collectors.toList());
        List<QuestionResponseDto> response =
                questions.stream()
                        .map(question -> mapper.questionToQuestionResponse(question))
                        .filter(i -> i.getAnswerCount() == 0)
                        .collect(Collectors.toList());

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponses(questions),pageQuestions),
                HttpStatus.OK);

//        Page<Question> pageQuestions = questionService.findQuestions(page-1, size);
//        List<Question> questions = pageQuestions.getContent();
//        return new ResponseEntity<>(
//                new MultiResponseDto<>(mapper.questionListToQuestionResponseDtos(questions),pageQuestions),
//                HttpStatus.OK);
    }
}
