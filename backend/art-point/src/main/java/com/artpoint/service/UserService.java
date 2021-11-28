package com.artpoint.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.artpoint.authentication.AuthenticationService;
import com.artpoint.authentication.JwtRequest;
import com.artpoint.authentication.JwtResponse;
import com.artpoint.entity.Art;
import com.artpoint.entity.User;
import com.artpoint.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticationService authenticationService;

    public List<User> getAllUsers() {
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);

        return users;
    }


    public ResponseEntity<Map<String, Object>> getAllSellers(int page, int size) {
        try {
            List<User> sellers = new ArrayList<>();
            Pageable pageable = PageRequest.of(page, size);

            Page<User> pageSellers = userRepository.findByMyArtsNotEmpty(pageable);

            sellers = pageSellers.getContent();

            Map<String, Object> response = new HashMap<>();
            response.put("sellers", sellers);
            response.put("currentPage", pageSellers.getNumber());
            response.put("totalItems", pageSellers.getTotalElements());
            response.put("totalPages", pageSellers.getTotalPages());

            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<Map<String, Object>> getTopRatedSellers(int page, int size) {
        try {
            List<User> sellers = new ArrayList<>();
            Pageable pageable = PageRequest.of(page, size, Sort.by("rating").descending());

            Page<User> pageSellers = userRepository.findByMyArtsNotEmpty(pageable);

            sellers = pageSellers.getContent();

            Map<String, Object> response = new HashMap<>();
            response.put("sellers", sellers);
            response.put("currentPage", pageSellers.getNumber());
            response.put("totalItems", pageSellers.getTotalElements());
            response.put("totalPages", pageSellers.getTotalPages());

            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

//    public List<User> getAllSellers() {
//        List<User> sellers = new ArrayList<>();
//
//        for (User user : userRepository.findAll()) {
//            if (!user.getMyArts().isEmpty()) {
//                sellers.add(user);
//            }
//        }
//
//        return sellers;
//    }

    public User getUser(long id) {
        return userRepository.findById(id).get();
    }

    public User addUser(User user)  {
        return userRepository.save(user);
    }
    
    public JwtResponse updateUser(long id, User updatedUser) throws Exception {

        User user = userRepository.findById(id).get();

        user.setFirstName(updatedUser.getFirstName());
        user.setLastName(updatedUser.getLastName());
        user.setEmail(updatedUser.getEmail());
        user.setPhone(updatedUser.getPhone());
        user = userRepository.save(user);

        return authenticationService.authenticate(new JwtRequest(user.getEmail(), user.getPassword()));

    }

    public void deleteUser(long id) {
        userRepository.deleteById(id);
    }

}