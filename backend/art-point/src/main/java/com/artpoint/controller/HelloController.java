package com.artpoint.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class HelloController {

    @GetMapping("/")
    public String sayHello() {
        return "Welcome to Art Selling Website: Art Point";
    }

    @PostMapping("/upload")
    public String uploadImage(@RequestParam("file") MultipartFile file) throws IOException {

//        System.out.println(art);

        String dirPath = "/home/vineetkumar19/Desktop/ecom/data/";
        file.transferTo(new File(dirPath + file.getOriginalFilename()));
        return "file uploaded successfully";
    }
}
