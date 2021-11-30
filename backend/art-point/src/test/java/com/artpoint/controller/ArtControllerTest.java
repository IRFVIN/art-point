package com.artpoint.controller;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ArtControllerTest {

    @Test
    void fileCheck() throws Exception {
String dirPath = "/home/vineetkumar19/Desktop/ecom/Art Point/art-point/backend/art-point/src/main/resources/static/image";

//        String temp = ServletUriComponentsBuilder.fromCurrentContextPath().path("/image").path("hello").toUriString();
        System.out.println("dirPath = " + dirPath);
    }
}