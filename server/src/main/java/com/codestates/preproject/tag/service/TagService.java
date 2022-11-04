package com.codestates.preproject.tag.service;

import com.codestates.preproject.tag.entity.Tag;
import com.codestates.preproject.tag.repository.TagRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;


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

    public Page<Tag> findTagsRight(int page, int size) {
        List<Tag> list = tagRepository.findByTagCountGreaterThan(0)
                .stream().sorted(Comparator.comparing(Tag::getTagCount).reversed())
                .collect(Collectors.toList());

        PageRequest pageRequest = PageRequest.of(page, size);
        int start = (int) pageRequest.getOffset();
        int end = Math.min((start + pageRequest.getPageSize()), list.size());
        Page<Tag> questionPage = new PageImpl<>(list.subList(start, end), pageRequest, list.size());
        return questionPage;
    }

}
