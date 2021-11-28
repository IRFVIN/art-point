package com.artpoint.repository;

import com.artpoint.entity.Art;
import com.artpoint.entity.User;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

public interface ArtRepository extends CrudRepository<Art, Long> {
    Page<Art> findAll(Pageable pageable);
    Page<Art> findByTitleContainingIgnoreCase(String title, Pageable pageable);
//    Page<Art> findByPriceBetween(int minPrice, int maxPrice, Pageable pageable);

    Page<Art> findAllByOwner(User owner, Pageable pageable);
    Page<Art> findByOwnerAndTitleContainingIgnoreCase(User owner, String title, Pageable pageable);
}
