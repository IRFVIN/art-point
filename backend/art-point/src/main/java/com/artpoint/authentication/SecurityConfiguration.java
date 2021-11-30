package com.artpoint.authentication;

import com.artpoint.authentication.filter.JwtFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    UserDetailsService userDetailsService;

    @Autowired
    private JwtFilter jwtFilter;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }

    @Override
    @Bean
    protected AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }

    @Override
    public void configure(WebSecurity web) {
        web.ignoring().antMatchers(
            "/h2-console/**",
            "/v3/api-docs/**",
            "/swagger-ui.html",
            "/swagger-ui/**",
            "/swagger-resources/**",
            "/swagger-resources"
        );
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.cors();

        http.csrf()
                .disable()
                .authorizeRequests()
                .regexMatchers("/category/\\d+/arts\\?page=\\d+").permitAll()
//                .regexMatchers("\/myPage\?param1=tata(&.*|$)")
//                .regexMatchers("/category/.*").permitAll()
                .antMatchers("/authenticate",
                        "/",
                        "/image/**",
                        "/art/**",
                        "/arts/**",
                        "/h2-console/**",
                        "/users",
                        "/user/**",
                        "/categories",
                        "/categories/**",
                        "/category/**",
                        "/sellers")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
    }

    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }
}
