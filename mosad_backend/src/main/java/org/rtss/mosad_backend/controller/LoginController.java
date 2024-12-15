package org.rtss.mosad_backend.controller;

import org.rtss.mosad_backend.service.LoginService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    private LoginService loginService;

    @GetMapping("/api/v1/login")
    private ResponseEntity<String> login(){
        return ResponseEntity.ok("Login unsuccessful");
    }
}
