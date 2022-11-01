package com.codestates.preproject.question.mapper;

import com.codestates.preproject.question.dto.*;
import com.codestates.preproject.question.entity.Question;
import com.codestates.preproject.question.entity.QuestionTag;
import com.codestates.preproject.question.service.QuestionService;
import com.codestates.preproject.tag.entity.Tag;
import com.codestates.preproject.user.dto.UserDto;
import com.codestates.preproject.user.entity.User;
import com.codestates.preproject.user.mapper.UserMapper;
import com.codestates.preproject.user.service.UserService;
import org.mapstruct.Mapper;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

//    Question questionPostToQuestion(QuestionPostDto questionPostDto);

//    Question questionPatchToQuestion(QuestionPatchDto questionPatchDto);

    //    QuestionResponseDto questionToQuestionResponse(Question question);
    List<QuestionResponseDto> questionsToQuestionResponses(List<Question> questions);

    default Question questionPostToQuestion(UserService userService, QuestionPostDto questionPostDto) {
        if ( questionPostDto == null ) {
            return null;
        }

        Question question = new Question();
        User user = new User();
        user.setUserId(questionPostDto.getUserId());

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
        question.setTitle( questionPostDto.getTitle() );
        question.setQuestionBody( questionPostDto.getQuestionBody() );
        question.setUser(userService.findUser(user));
        question.setQuestionTagList(list);
        question.setCreatedAt(LocalDateTime.now());

        return question;
    }

    default List<QuestionTag> questionTagsDtosToQuestionTags(List<QuestionTagDto> questionTagDtos, Question question) {
        return questionTagDtos.stream().map(questionTagDto -> {
            QuestionTag questionTag = new QuestionTag();
            questionTag.addQuestion(question);
            questionTag.getTag().setTagName(questionTagDto.getTagName());
            return questionTag;
        }).collect(Collectors.toList());
    }

    default Question questionPatchToQuestion(QuestionPatchDto questionPatchDto) {
        if ( questionPatchDto == null ) {
            return null;
        }

        Question question = new Question();
        question.setQuestionId( questionPatchDto.getQuestionId() );
//        question.setVoteCount( questionPatchDto.getVoteCount() );

        return question;
    }

    default QuestionResponseDto questionToQuestionResponse(UserMapper userMapper, Question question) {
        if ( question == null ) {
            return null;
        }

        List<QuestionTag> questionTagList = question.getQuestionTagList();

        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        questionResponseDto.setQuestionId( question.getQuestionId() );
        questionResponseDto.setTitle( question.getTitle() );
        questionResponseDto.setQuestionBody( question.getQuestionBody() );
        questionResponseDto.setQuestionTagList(questionTagListToQuestionTagResponseDtoList(question.getQuestionTagList()));
        questionResponseDto.setVoteCount( question.getVoteCount() );
        questionResponseDto.setAnswerCount( question.getAnswerCount() );
        questionResponseDto.setCreatedAt(question.getCreatedAt());

        User user = question.getUser();
        questionResponseDto.setUser(userMapper.userToUserResponseDto(user));
        questionResponseDto.setQuestionTagList(questionTagListToQuestionTagResponseDtoList(
                question.getQuestionTagList()
        ));

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

    default UserDto.Response userToResponse(User user) {
        if ( user == null ) {
            return null;
        }

        UserDto.Response response = new UserDto.Response();

        response.setUserId( user.getUserId() );
        response.setEmail( user.getEmail() );
        response.setName( user.getName() );
        response.setPassword( user.getPassword() );
        response.setQuestionCount( user.getQuestionCount() );

        return response;
    }

    default QuestionResponseDto questionToQuestionResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        questionResponseDto.setUser( userToResponse( question.getUser() ) );
        questionResponseDto.setQuestionId( question.getQuestionId() );
        questionResponseDto.setTitle( question.getTitle() );
        questionResponseDto.setQuestionBody( question.getQuestionBody() );
        questionResponseDto.setQuestionTagList( questionTagListToQuestionTagResponseDtoList( question.getQuestionTagList() ) );
        questionResponseDto.setVoteCount( question.getVoteCount() );
        questionResponseDto.setAnswerCount( question.getAnswerCount() );
        questionResponseDto.setCreatedAt( question.getCreatedAt() );

        return questionResponseDto;
    }
}