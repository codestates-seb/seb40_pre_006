package com.codestates.preproject.answer.entity;


import com.codestates.preproject.question.entity.Question;
import com.codestates.preproject.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Answer {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(nullable = false, length = 10000)
    private String answerBody;

    private LocalDateTime createdAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;


    //연관 관계 메서드
    public void setQuestion(Question question) {
        this.question = question;
        if (!question.getAnswerList().contains(this)) {
            question.getAnswerList().add(this);
        }
    }

    public void setUser(User user) {
        this.user = user;
        if (!user.getAnswerList().contains(this)) {
            user.getAnswerList().add(this);
        }
    }
}
