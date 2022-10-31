package com.codestates.preproject.tag.repository;

import com.codestates.preproject.tag.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Long> {

}
