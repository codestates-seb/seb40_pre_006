package com.codestates.preproject.tag.dto;

import lombok.Getter;
import lombok.Setter;

public class TagDto {
    @Getter
    @Setter
    public static class Response {
        private long tagId;
        private String tagName;
    }
}
