package com.codestates.preproject.question.mapper;

import com.codestates.preproject.question.dto.QuestionPatchDto;
import com.codestates.preproject.question.dto.QuestionPostDto;
import com.codestates.preproject.question.dto.QuestionResponseDto;
import com.codestates.preproject.question.dto.QuestionTagResponseDto;
import com.codestates.preproject.question.entity.Question;
import com.codestates.preproject.question.entity.QuestionTag;
import com.codestates.preproject.tag.entity.Tag;
import com.codestates.preproject.user.entity.User;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPatchToQuestion(QuestionPatchDto questionPatchDto);
    List<QuestionResponseDto> questionListToQuestionResponseDtos(List<Question> questionList);

    default Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        Question question = new Question();
        User user = new User();
        user.setUserId(questionPostDto.getUserId());

        List<QuestionTag> questionTagList = questionPostDto.getQuestionTagList().stream()
                .map(questionTagDto -> {
                    QuestionTag questionTag = new QuestionTag();
                    Tag tag = new Tag();
                    tag.setTagId(questionTagDto.getTag().getTagId());
                    questionTag.addQuestion(question);
                    questionTag.addTag(tag);
                    return questionTag;
                }).collect(Collectors.toList());
        question.setUser(user);
        question.setTitle(questionPostDto.getTitle());
        question.setQuestionBody(questionPostDto.getQuestionBody());
        question.setQuestionTagList(questionTagList);
        return question;
    }

    default QuestionResponseDto questionToQuestionResponseDto(Question question) {
        List<QuestionTag> questionTagList = question.getQuestionTagList();

        QuestionResponseDto questionResponseDto = new QuestionResponseDto();
        questionResponseDto.setQuestionId(question.getQuestionId());
        questionResponseDto.setUser(question.getUser());
//        questionResponseDto.setUserId(question.getUser().getUserId());
//        questionResponseDto.setName(question.getUser().getName()); //
        questionResponseDto.setTitle(question.getTitle());
        questionResponseDto.setQuestionBody(question.getQuestionBody());
        questionResponseDto.setVoteCount(question.getVoteCount());
        questionResponseDto.setAnswerCount(question.getAnswerCount());
        questionResponseDto.setCreateAt(question.getCreatedAt());
        questionResponseDto.setQuestionTagList(
                questionTagListToQuestionTagResponseDtos(questionTagList)
        );
        return questionResponseDto;
    }

    default List<QuestionTagResponseDto> questionTagListToQuestionTagResponseDtos(List<QuestionTag> questionTagList) {
        return questionTagList
                .stream()
                .map(questionTag -> QuestionTagResponseDto
                        .builder()
                        .tagId(questionTag.getTag().getTagId())
                        .tagName(questionTag.getTag().getTagName())
                        .build())
                .collect(Collectors.toList());
    }
}
