package com.artpoint.service;

import java.util.ArrayList;
import java.util.List;

import com.artpoint.entity.User;
import com.artpoint.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);

        return users;
    }

    public User getUser(long id) {
        return userRepository.findById(id).get();
    }

    public User addUser(User user)  {
        return userRepository.save(user);
    }
    
    public void updateUser(long id, User user) {
        userRepository.save(user);
    }

    public void deleteUser(long id) {
        userRepository.deleteById(id);
    }

}