package com.artpoint.controller;

import java.util.List;

import com.artpoint.entity.Art;
import com.artpoint.service.ArtService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
public class ArtController {
    @Autowired
    private ArtService artService;

    @Operation(summary = "Get a list of all art")
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Successfully fetched list of all art",
            content = {@Content(mediaType = "application/json")}
        )
    })
    @GetMapping("/art")
    public List<Art> getAllArt() {
        return artService.getAllArt();
    }

    @Operation(summary = "Add a new Art")
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Successfully added the art"
        )
    })
    @PostMapping("/art")
    public void addArt(@RequestBody Art art) {
        artService.addArt(art);
    }

    @Operation(summary = "Get art with specified ID ")
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Successfully fetched art",
            content = {@Content(mediaType = "application/json")}
        )
    })
    @GetMapping("/art/{id}")
    public Art getArt(@PathVariable Long id) {
        return artService.getArt(id);
    }

    @Operation(summary = "Modify art with specified ID ")
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Successfully modified art"
        )
    })
    @PutMapping(value = "/art/{id}")
    public void updateArt(@PathVariable Long id, @RequestBody Art art) {
        artService.updateArt(id, art);
    }

    @Operation(summary = "Delete art with specified ID ")
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Successfully deleted art"
        )
    })
    @DeleteMapping("/art/{id}")
    public void deleteArt(@PathVariable Long id) {
        artService.deleteArt(id);
    }
}
