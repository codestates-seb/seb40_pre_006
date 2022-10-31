package com.codestates.preproject.question.mapper;

import com.codestates.preproject.question.dto.*;
import com.codestates.preproject.question.entity.Question;
import com.codestates.preproject.question.entity.QuestionTag;
import com.codestates.preproject.tag.entity.Tag;
import org.mapstruct.Mapper;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

//    Question questionPostToQuestion(QuestionPostDto questionPostDto);

    Question questionPatchToQuestion(QuestionPatchDto questionPatchDto);

    //    QuestionResponseDto questionToQuestionResponse(Question question);
    List<QuestionResponseDto> questionsToQuestionResponses(List<Question> questions);

    default Question questionPostToQuestion(QuestionPostDto questionPostDto) {
        if ( questionPostDto == null ) {
            return null;
        }

        Question question = new Question();
        question.setUser( questionPostDto.getUser() );
        question.getUser().setUserId(questionPostDto.getUserId());
        question.setTitle( questionPostDto.getTitle() );
        question.setQuestionBody( questionPostDto.getQuestionBody() );
        question.setName(questionPostDto.getUser().getName());
        List<QuestionTag> list = questionPostDto.getQuestionTagList().stream()
                .map(questionTagDto -> {
                    QuestionTag questionTag = new QuestionTag();
                    Tag tag = new Tag();
                    tag.setTagName(questionTagDto.getTagName());
                    questionTag.addQuestion(question);
                    questionTag.addTag(tag);
                    return questionTag;
                }).collect(Collectors.toList());
        if ( list != null ) {
            question.setQuestionTagList( new ArrayList<QuestionTag>( list ) );
        }

        return question;
    }

    default QuestionResponseDto questionToQuestionResponse(Question question) {
        if ( question == null ) {
            return null;
        }
        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        questionResponseDto.setQuestionId( question.getQuestionId() );
        questionResponseDto.setTitle( question.getTitle() );
        questionResponseDto.setQuestionBody( question.getQuestionBody() );
        questionResponseDto.setQuestionTagList(questionTagListToQuestionTagResponseDtoList(question.getQuestionTagList()));
        questionResponseDto.setName( question.getName() );
        questionResponseDto.setVoteCount( question.getVoteCount() );
        questionResponseDto.setAnswerCount( question.getAnswerCount() );
        questionResponseDto.setCreateAt(LocalDateTime.now());

        return questionResponseDto;
    }

    default List<QuestionTagResponseDto> questionTagListToQuestionTagResponseDtoList(List<QuestionTag> list) {
        if ( list == null ) {
            return null;
        }

//        List<QuestionTagResponseDto> list1 = new ArrayList<QuestionTagResponseDto>( list.size() );
//        for ( QuestionTag questionTag : list ) {
//            list1.add( questionTagToQuestionTagResponseDto( questionTag ) );
//        }
//
//        return list1;

        return list.stream()
                .map(questionTag -> QuestionTagResponseDto
                        .builder()
                        .tagName(questionTag.getTag().getTagName())
                        .build())
                .collect(Collectors.toList());
    }

    default QuestionTagResponseDto questionTagToQuestionTagResponseDto(QuestionTag questionTag) {
        if ( questionTag == null ) {
            return null;
        }

        QuestionTagResponseDto.QuestionTagResponseDtoBuilder questionTagResponseDto =
                QuestionTagResponseDto
                        .builder();

        return questionTagResponseDto.build();
    }
}