package com.artpoint.repository;

import com.artpoint.entity.Art;

import org.springframework.data.repository.CrudRepository;

public interface ArtRepository extends CrudRepository<Art, Long> {

}
