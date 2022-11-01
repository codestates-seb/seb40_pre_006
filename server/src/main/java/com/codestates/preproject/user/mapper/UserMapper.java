package com.codestates.preproject.user.mapper;

import com.codestates.preproject.user.dto.UserDto;
import com.codestates.preproject.user.entity.User;

import java.util.List;

//@Mapper(componentModel = "spring")
public interface UserMapper {
    User userPostDtoToUser(UserDto.Post requestBody);
    UserDto.Response userToUserResponseDto(User user);
//    UserDto.ResponseGet userToUserResponseDtoGet(User user);
    List<UserDto.ResponseGet> userToUserResponseDtoGet(List<User> users);
}