package com.artpoint.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
public class HelloController {

    @GetMapping("/")
    public String sayHello() {
        return "<h1>Welcome to Art Selling Website: Art Point</h1>";
    }

    @PostMapping
    public void uploadImage(@RequestParam("file") MultipartFile file) throws IOException {
        file.transferTo(new File("temp/" + file.getOriginalFilename()));
    }
}
