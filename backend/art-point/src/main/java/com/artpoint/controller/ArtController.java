package com.artpoint.controller;

import java.io.File;
import java.util.List;

import com.artpoint.entity.Art;
import com.artpoint.service.ArtService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

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
    public List<Art> getAllArt() {
        return artService.getAllArt();
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
        artService.addArt(art);
        System.out.println(imageFile);
        //System.out.println(new ClassPathResource("static/image/151.jpeg"));
        //System.out.println(saveImage(imageFile, 150L));
    }

    public String saveImage(MultipartFile imageFile, Long artId) throws Exception {
        String dirPath = "/home/vineetkumar19/Desktop/ecom/Art Point/art-point/backend/art-point/src/main/resources/static/image/";

        String fileName = artId.toString() + '.' + getFileExtension(imageFile.getOriginalFilename());
        imageFile.transferTo(new File(dirPath + fileName));
        return "file updated successfully";
//        return ServletUriComponentsBuilder.fromCurrentContextPath().path("/image/").path(fileName).toUriString();
    }

    String getFileExtension(String fileName) {
        String extension = "";

        int i = fileName.lastIndexOf('.');
        if (i > 0) {
            extension = fileName.substring(i+1);
        }

        return extension;
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
