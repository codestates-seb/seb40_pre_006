package com.codestates.preproject.tag.service;

import com.codestates.preproject.tag.entity.Tag;
import com.codestates.preproject.tag.repository.TagRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


@Service
public class TagService {
    private final TagRepository tagRepository;
    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public Page<Tag> findTags(int page, int size) {
     return tagRepository.findAll(PageRequest.of(page, size,
             Sort.by("tagCount").descending()));
    }

    public Tag updateTag(Tag tag) {
        return tagRepository.save(tag);
    }

}
