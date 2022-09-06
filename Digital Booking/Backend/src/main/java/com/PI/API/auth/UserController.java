package com.PI.API.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/register")
public class UserController {
    @Autowired
    private UserAuthService userAuthService;

    @PostMapping("/user")
    public ResponseEntity create(@RequestBody UserAuth userAuth){
        userAuthService.create(userAuth);
        return ResponseEntity.status(HttpStatus.CREATED).body("fue creado");
    }
}
