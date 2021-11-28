package com.artpoint.authentication;

import com.artpoint.authentication.utility.JWTUtility;
import com.artpoint.entity.User;
import com.artpoint.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class AuthenticationService {


    @Autowired
    private JWTUtility jwtUtility;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private UserRepository userRepository;

    public JwtResponse authenticate(JwtRequest jwtRequest) throws Exception{
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            jwtRequest.getEmail(),
                            jwtRequest.getPassword()
                    )
            );
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID CREDENTIALS", e);
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(jwtRequest.getEmail());

        final String token = jwtUtility.generateToken(userDetails);
        final User user = userRepository.findByEmail(jwtRequest.getEmail()).get();

        return new JwtResponse(token, user);
    }
}
