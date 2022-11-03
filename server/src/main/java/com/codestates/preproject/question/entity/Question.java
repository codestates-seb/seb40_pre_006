package com.codestates.preproject.question.entity;

import com.codestates.preproject.answer.entity.Answer;
import com.codestates.preproject.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class Question {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, length = 50000)
    private String questionBody;

    private int voteCount;

    private int answerCount;

    private LocalDateTime createdAt;

    public Question(Long questionId, String title, String questionBody, int voteCount, int answerCount,
                    LocalDateTime createdAt, List<QuestionTag> questionTagList) {
        this.questionId = questionId;
        this.title = title;
        this.questionBody = questionBody;
        this.voteCount = voteCount;
        this.answerCount = answerCount;
        this.createdAt = createdAt;
        this.questionTagList = questionTagList;
    }

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<Answer> answerList = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;

    @OneToMany(mappedBy = "question")
    private List<QuestionTag> questionTagList = new ArrayList<>();

    // 연관 관계 메서드
    public void setUser(User user) {
        this.user = user;
    }

    public void addQuestionTag(QuestionTag questionTag) {
        this.questionTagList.add(questionTag);
        if(questionTag.getQuestion() != this){
            questionTag.addQuestion(this);
        }
    }

    public void addAnswer(Answer answer) {
        this.answerList.add(answer);
        if(answer.getQuestion() != this){
            answer.setQuestion(this);
        }
    }


}
