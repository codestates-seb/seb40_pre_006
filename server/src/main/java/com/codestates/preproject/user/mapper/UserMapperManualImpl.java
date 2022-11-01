package com.codestates.preproject.user.mapper;

import com.codestates.preproject.tag.dto.TagDto;
import com.codestates.preproject.tag.entity.Tag;
import com.codestates.preproject.user.dto.UserDto;
import com.codestates.preproject.user.entity.User;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
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

    public List<UserDto.ResponseGet> userToUserResponseDtoGet(List<User> users) {
        if ( users == null ) {
            return null;
        }

        List<UserDto.ResponseGet> list = new ArrayList<>( users.size() );
        for ( User user : users ) {
            list.add( userToResponse( user ) );
        }

        return list;
    }

    protected UserDto.ResponseGet userToResponse(User user) {
        if ( user == null ) {
            return null;
        }

        UserDto.ResponseGet response = new UserDto.ResponseGet();

        if ( user.getUserId() != null ) {
            response.setUserId( user.getUserId() );
        }
        response.setName( user.getName() );
        response.setQuestionCount( user.getQuestionCount() );

        return response;
    }


}
