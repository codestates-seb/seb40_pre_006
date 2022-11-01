package com.codestates.preproject.user.service;

import com.codestates.preproject.exception.BusinessLogicException;
import com.codestates.preproject.exception.ExceptionCode;
import com.codestates.preproject.question.entity.Question;
import com.codestates.preproject.question.repository.QuestionRepository;
import com.codestates.preproject.user.entity.User;
import com.codestates.preproject.user.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final QuestionRepository questionRepository;

    public UserService(UserRepository userRepository, QuestionRepository questionRepository) {
        this.userRepository = userRepository;
        this.questionRepository = questionRepository;
    }

    public User createUser(User user){
        verifyExistsEmailAndName(user.getEmail(), user.getName());
        userRepository.save(user);
        return user;
    }

    public User findUser(long userId) {
        User user = userRepository.findByUserId(userId);
        List<Question> questionList = questionRepository.findAllByUser(user);
        user.setQuestionList(questionList);

        return user;
    }

    public Page<User> findUsers(int page, int size) {
//        User user1 = new User();
//        user1.setName("홍길동01");
//        user1.setQuestionCount(1);
//        user1.setEmail("hgd1@gmail.com");
//        user1.setPassword("123abc!@");
//        userRepository.save(user1);

        return userRepository.findAll(PageRequest.of(page, size,
                Sort.by("name")));
    }

    private void verifyExistsEmailAndName(String email, String name){
        Optional<User> userByEmail = userRepository.findByEmail(email);
        Optional<User> userByName = userRepository.findByName(name);

        if(userByEmail.isPresent() && userByName.isPresent()){
            throw new BusinessLogicException(ExceptionCode.EMAIL_AND_USER_EXISTS);
        } else if(userByEmail.isPresent()){
            throw new BusinessLogicException(ExceptionCode.EMAIL_EXISTS);
        } else if(userByName.isPresent()){
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
        }
    }

}
