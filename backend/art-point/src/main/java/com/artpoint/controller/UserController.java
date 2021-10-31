package com.artpoint.controller;

import java.util.List;

import com.artpoint.entity.User;
import com.artpoint.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
public class UserController {
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

    @Operation(summary = "Add a new User")
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Successfully added the user"
        )
    })
    @PostMapping("/users")
    public void addUser(@RequestBody User user) {
        userService.addUser(user);
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
    public void updateUser(@PathVariable Long id, @RequestBody User user) {
        userService.updateUser(id, user);
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

}
