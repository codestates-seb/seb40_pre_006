package com.codestates.preproject.tag.dto;

import lombok.Getter;
import lombok.Setter;

public class TagDto {
    @Getter
    @Setter
    public static class Response {
        private Long tagId;
        private String tagName;
    }
}
