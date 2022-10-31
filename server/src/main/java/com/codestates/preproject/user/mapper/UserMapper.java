package com.codestates.preproject.user.mapper;

import com.codestates.preproject.user.dto.UserDto;
import com.codestates.preproject.user.entity.User;

//@Mapper(componentModel = "spring")
public interface UserMapper {
//    User userPostDtoToUser(UserDto.Post requestBody);
//    //    UserDto.Response userToUserResponseDto(User user);
//    List<UserDto.Response> usersToUserResponseDtos(List<User> users);
//
//    default UserDto.Response userToUserResponseDto(User user) {
//        UserDto.Response response = new UserDto.Response();
//        response.setUserId(user.getUserId());
//        response.setEmail(user.getEmail());
//        response.setName(user.getName());
//        response.setPassword(user.getPassword());
//        response.setQuestionCount(user.getQuestionList().size());
//
//        return response;
//    }

    User userPostDtoToUser(UserDto.Post requestBody);
    UserDto.Response userToUserResponseDto(User user);
    UserDto.ResponseGet userToUserResponseDtoGet(User user);
}