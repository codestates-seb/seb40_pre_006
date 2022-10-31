package com.codestates.preproject.tag.service;

import com.codestates.preproject.tag.entity.Tag;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagService {
    public List<Tag> findTags() {
        List<Tag> tags = List.of(
                new Tag(1L, "Java"),
                new Tag(2L, "C++")
        );
        return tags;
    }
}
