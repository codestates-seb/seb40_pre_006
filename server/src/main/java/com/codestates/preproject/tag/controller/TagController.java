package com.codestates.preproject.tag.controller;

import com.codestates.preproject.dto.MultiResponseDto;
import com.codestates.preproject.dto.SingleResponseDto;
import com.codestates.preproject.tag.entity.Tag;
import com.codestates.preproject.tag.mapper.TagMapper;
import com.codestates.preproject.tag.service.TagService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

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
    public ResponseEntity getTagsRight(){

        Page<Tag> pageTags = tagService.findTags(1-1, 5);
        List<Tag> tags = pageTags.getContent();
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.tagToTagResponseDto(tags)),
                HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getTags(@Positive @RequestParam int page,
                                  @Positive @RequestParam int size){

        Page<Tag> pageTags = tagService.findTags(page - 1, size);
        List<Tag> tags = pageTags.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.tagToTagResponseDto(tags), pageTags),
                HttpStatus.OK);
    }
}
