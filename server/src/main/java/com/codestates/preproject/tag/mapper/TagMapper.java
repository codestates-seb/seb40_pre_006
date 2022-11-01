package com.codestates.preproject.tag.mapper;

import com.codestates.preproject.tag.dto.TagDto;
import com.codestates.preproject.tag.entity.Tag;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TagMapper {
    List<TagDto.Response> tagToTagResponseDto(List<Tag> tags);
}
