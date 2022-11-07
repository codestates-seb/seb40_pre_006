package com.codestates.preproject.question.entity;

import com.codestates.preproject.tag.entity.Tag;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
@NoArgsConstructor
public class QuestionTag {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionTagId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "TAG_ID")
    private Tag tag;

    // 연관 관계 메서드
    public void addQuestion(Question question) {
        this.question = question;
        if (!this.question.getQuestionTagList().contains(this)) {
            this.question.getQuestionTagList().add(this);
        }
    }

    public void addTag(Tag tag) {
        this.tag = tag;
        if (!this.tag.getQuestionTagList().contains(this)) {
            this.tag.addQuestionTag(this);
        }
    }
}
