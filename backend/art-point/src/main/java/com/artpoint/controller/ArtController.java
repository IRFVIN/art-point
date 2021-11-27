package com.artpoint.controller;

import java.util.List;
import java.util.Map;

import com.artpoint.entity.Art;
import com.artpoint.service.ArtService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
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
    // public List<Art> getAllArt() {
    //     return artService.getAllArt();
    // }
    public ResponseEntity<Map<String, Object>> getAllArt(
        @RequestParam(required = false) String title,
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "10") int size
    ) {
        return artService.getAllArt(title, page, size);
    }

    @Operation(summary = "Add a new Art")
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Successfully added the art",
            content = {@Content(mediaType = "multipart/form-data")}
        )
    })
    @PostMapping(value = "/art", consumes = {
        MediaType.APPLICATION_JSON_VALUE,
        MediaType.MULTIPART_FORM_DATA_VALUE
    })
    public void addArt(@RequestPart("art") Art art, @RequestPart("image") MultipartFile imageFile) throws Exception {
        Long newArtID = artService.addArt(art, imageFile.getBytes(), imageFile.getOriginalFilename());
        System.out.println("added new art with ID: " + newArtID);
    }

    @GetMapping(value = "/image/{artID}", produces = MediaType.IMAGE_JPEG_VALUE)
    FileSystemResource getImageResource(@PathVariable Long artID) throws Exception {
        System.out.println("finding image for art ID: " + artID);
        return artService.find(artID);
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
