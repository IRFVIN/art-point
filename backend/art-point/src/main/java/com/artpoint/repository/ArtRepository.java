package com.artpoint.repository;

import com.artpoint.entity.Art;
import com.artpoint.entity.User;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ArtRepository extends CrudRepository<Art, Long> {
    List<Art> findAll();
    Page<Art> findAll(Pageable pageable);
    List<Art> findByTitleContainingIgnoreCase(String title);
    Page<Art> findByTitleContainingIgnoreCase(String title, Pageable pageable);
    List<Art> findByPriceBetween(Double minPrice, Double maxPrice);

    @Query(value="select min(price) from Art")
    double getMinPrice();

    @Query(value = "select max(price) from Art")
    double getMaxPrice();

    Page<Art> findAllByOwner(User owner, Pageable pageable);
    Page<Art> findByOwnerAndTitleContainingIgnoreCase(User owner, String title, Pageable pageable);
}
