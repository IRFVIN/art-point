package com.artpoint.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

    @Autowired
    AuthenticationService authenticationService;

    @PostMapping("/authenticate")
    public JwtResponse authenticate(@RequestBody JwtRequest jwtRequest) throws Exception{
        return authenticationService.authenticate(jwtRequest);
    }

}
