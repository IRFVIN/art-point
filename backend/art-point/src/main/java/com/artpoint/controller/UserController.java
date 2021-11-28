package com.artpoint.controller;

import java.util.List;
import java.util.Map;

import com.artpoint.authentication.JwtResponse;
import com.artpoint.entity.Art;
import com.artpoint.entity.Chat;
import com.artpoint.entity.User;
import com.artpoint.service.ArtService;
import com.artpoint.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
public class UserController {
    @Autowired
    private ArtService artService;

    @Autowired
    private UserService userService;

    @Operation(summary = "Get a list of all users")
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Successfully fetched list of all users",
            content = {@Content(mediaType = "application/json")}
        )
    })
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/sellers")
    public ResponseEntity<Map<String, Object>> getAllSellers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        return userService.getAllSellers(page, size);
    }

    @Operation(summary = "Add a new User")
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Successfully added the user"
        )
    })
    @PostMapping("/users")
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @Operation(summary = "Get user with specified ID ")
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Successfully fetched user",
            content = {@Content(mediaType = "application/json")}
        )
    })
    @GetMapping("/user/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }

    @Operation(summary = "Modify user with specified ID ")
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Successfully modified user"
        )
    })
    @PutMapping(value = "/user/{id}")
    public JwtResponse updateUser(@PathVariable Long id, @RequestBody User user) throws Exception {
        return userService.updateUser(id, user);
    }

    @Operation(summary = "Delete user with specified ID ")
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Successfully deleted user"
        )
    })
    @DeleteMapping("/user/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }

    @GetMapping("/user/{id}/arts")
    // public List<Art> getUserArts(@PathVariable Long id) {
    //     return userService.getUser(id).getMyArts();
    // }
    public ResponseEntity<Map<String, Object>> getUserArts(
        @RequestParam(required = false) String title,
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "10") int size,
        @PathVariable Long id
    ) {
        return artService.getAllUserArt(userService.getUser(id), title, page, size);
    }


    @GetMapping("/user/{id}/notifications")
    public List<Chat> getMyChats(@PathVariable Long id) {
        return userService.getUser(id).getChatsFrom();
    }

}
