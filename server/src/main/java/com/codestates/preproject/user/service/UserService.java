package com.codestates.preproject.user.service;

import com.codestates.preproject.auth.utils.CustomAuthorityUtils;
import com.codestates.preproject.exception.BusinessLogicException;
import com.codestates.preproject.exception.ExceptionCode;
import com.codestates.preproject.question.entity.Question;
import com.codestates.preproject.question.repository.QuestionRepository;
import com.codestates.preproject.user.entity.User;
import com.codestates.preproject.user.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final QuestionRepository questionRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public UserService(UserRepository userRepository, QuestionRepository questionRepository,
                       PasswordEncoder passwordEncoder, CustomAuthorityUtils authorityUtils) {
        this.userRepository = userRepository;
        this.questionRepository = questionRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }

    public User createUser(User user){
        verifyExistsEmailAndName(user.getEmail(), user.getName());

        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(user.getEmail());
        user.setRoles(roles);

        userRepository.save(user);
        return user;
    }

    public User findUser(Long userId) {
        User user = userRepository.findByUserId(userId);
        List<Question> questionList = questionRepository.findAllByUser(user);
        user.setQuestionList(questionList);

        return user;
    }

    public void VerifyUserId(Long userId) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
    }

    public User updateUser(User user) {
        return userRepository.save(user);
    }

    public Page<User> findUsers(int page, int size) {
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
