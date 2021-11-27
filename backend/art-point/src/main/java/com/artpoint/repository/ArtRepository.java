package com.artpoint.repository;

import com.artpoint.entity.Art;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

public interface ArtRepository extends CrudRepository<Art, Long> {
    Page<Art> findAll(Pageable pageable);
    Page<Art> findByTitleContainingIgnoreCase(String title, Pageable pageable);
}
