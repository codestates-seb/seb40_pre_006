package com.codestates.preproject.user.entity;

import com.codestates.preproject.answer.entity.Answer;
import com.codestates.preproject.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "USERS")
@Getter @Setter
@NoArgsConstructor
public class User {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(length = 100, nullable = false)
    private String password;

    private int questionCount;

    @OneToMany(mappedBy = "user")
    private List<Question> questionList = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Answer> answerList = new ArrayList<>();

    // 연관 관계 메서드
    public void addQuestion(Question question) {
        questionList.add(question);
        if (question.getUser() != this) {
            question.setUser(this);
        }
    }

    public void addAnswer(Answer answer) {
        answerList.add(answer);
        if (answer.getUser() != this) {
            answer.setUser(this);
        }
    }
}
