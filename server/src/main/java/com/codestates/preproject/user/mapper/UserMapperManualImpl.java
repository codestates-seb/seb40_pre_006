package com.codestates.preproject.user.mapper;

import com.codestates.preproject.user.dto.UserDto;
import com.codestates.preproject.user.entity.User;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserMapperManualImpl implements UserMapper {
    public UserMapperManualImpl() {
    }

    public User userPostDtoToUser(UserDto.Post requestBody) {
        if (requestBody == null) {
            return null;
        } else {
            User user = new User();
            user.setName(requestBody.getName());
            user.setEmail(requestBody.getEmail());
            user.setPassword(requestBody.getPassword());
            return user;
        }
    }

    public UserDto.Response userToUserResponseDto(User user) {
        UserDto.Response response = new UserDto.Response();
        response.setUserId(user.getUserId());
        response.setEmail(user.getEmail());
        response.setName(user.getName());
        response.setPassword(user.getPassword());
        response.setQuestionCount(user.getQuestionList().size());

        return response;
    }

    public UserDto.ResponseGet userToUserResponseDtoGet(User user) {
        UserDto.ResponseGet response = new UserDto.ResponseGet();
        response.setUserId(user.getUserId());
        response.setName(user.getName());
        response.setQuestionCount(user.getQuestionList().size());

        return response;
    }
}
