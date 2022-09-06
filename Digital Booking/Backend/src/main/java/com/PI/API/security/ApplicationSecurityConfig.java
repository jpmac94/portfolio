package com.PI.API.security;

import com.PI.API.auth.UserService;


import com.PI.API.jwt.JwtTokenVerifier;
import com.PI.API.jwt.UsernameAndPassowrdAuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;


import java.util.List;




@Configuration
@EnableWebSecurity
public class ApplicationSecurityConfig extends WebSecurityConfigurerAdapter {

    private final PasswordEncoder passwordEncoder;
    private final UserService userService;

    @Autowired
    public ApplicationSecurityConfig(PasswordEncoder passwordEncoder, UserService userService) {
        this.passwordEncoder = passwordEncoder;
        this.userService = userService;
    }


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilter(new UsernameAndPassowrdAuthenticationFilter(authenticationManager()))
                .addFilterAfter(new JwtTokenVerifier(),UsernameAndPassowrdAuthenticationFilter.class)
                .authorizeRequests()
                .antMatchers("/register/user*").permitAll()
                .antMatchers("/login*").permitAll()
                .antMatchers(HttpMethod.GET,"/api/**").permitAll()
                .antMatchers(HttpMethod.POST,"/api/reservation/**").hasRole(Roles.USER.name())
                .anyRequest()
                .authenticated();

    }


    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(daoAuthenticationProvider());
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider(){
        DaoAuthenticationProvider provider=new DaoAuthenticationProvider();
        provider.setPasswordEncoder(passwordEncoder);
        provider.setUserDetailsService(userService);
    return provider;
    }
}
