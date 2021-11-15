package com.artpoint.repository;

import com.artpoint.entity.User;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long>{
    public Optional<User> findByEmail(String email);
}
