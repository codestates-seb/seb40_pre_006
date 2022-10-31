package com.codestates.preproject.tag.controller;

import com.codestates.preproject.dto.SingleResponseDto;
import com.codestates.preproject.tag.dto.TagDto;
import com.codestates.preproject.tag.entity.Tag;
import com.codestates.preproject.tag.mapper.TagMapper;
import com.codestates.preproject.tag.service.TagService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/tag")
public class TagController {

    private final TagService tagService;
    private final TagMapper mapper;

    public TagController(TagService tagService, TagMapper mapper){
        this.tagService = tagService;
        this.mapper = mapper;
    }


    @GetMapping("/{right}")
    public ResponseEntity getTags(){
        List<Tag> tags = tagService.findTags();
        List<TagDto.Response> response =
                tags.stream()
                        .map(tag -> mapper.tagToTagResponseDto(tag))
                        .collect(Collectors.toList());
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

}
