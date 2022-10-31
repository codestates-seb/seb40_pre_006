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

        Tag tag = new Tag();
        tag.setTagName("Java");
        tagRepository.save(tag);

        Tag tag2 = new Tag();
        tag2.setTagName("C++");
        tagRepository.save(tag2);

        Tag tag3 = new Tag();
        tag3.setTagName("Python");
        tagRepository.save(tag3);

        Tag tag4 = new Tag();
        tag4.setTagName("C");
        tagRepository.save(tag4);

        Tag tag5 = new Tag();
        tag5.setTagName("Go");
        tagRepository.save(tag5);

        Tag tag6 = new Tag();
        tag6.setTagName("Rust");
        tagRepository.save(tag6);

     return tagRepository.findAll(PageRequest.of(page, size,
             Sort.by("tagName")));
    }

}
