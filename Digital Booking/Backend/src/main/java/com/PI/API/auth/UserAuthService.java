package com.PI.API.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserAuthService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    void create(UserAuth userAuth){
        userAuth.setPassword(passwordEncoder.encode(userAuth.getPassword()));
        userRepository.save(userAuth);
    }

}
