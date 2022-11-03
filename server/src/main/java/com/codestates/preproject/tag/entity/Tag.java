package com.codestates.preproject.tag.entity;


import com.codestates.preproject.question.entity.QuestionTag;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@NoArgsConstructor
public class Tag {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tagId;
    private String tagName;
    private int tagCount;

    @OneToMany(mappedBy = "tag")
    private List<QuestionTag> questionTagList = new ArrayList<>();

    // 연관 관계 메서드
    public void addQuestionTag(QuestionTag questionTag) {
        this.questionTagList.add(questionTag);
        if (questionTag.getTag() != this) {
            questionTag.addTag(this);
        }
    }
}
