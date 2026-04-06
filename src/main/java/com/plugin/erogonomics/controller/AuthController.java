package com.plugin.erogonomics.controller;
}
    }
        }
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        } catch (RuntimeException e) {
            return ResponseEntity.ok(response);
            AuthResponse response = authService.login(request);
        try {
    public ResponseEntity<?> login(@Valid @RequestBody AuthRequest.LoginRequest request) {
    @PostMapping("/login")

    }
        }
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        } catch (RuntimeException e) {
            return ResponseEntity.ok(response);
            AuthResponse response = authService.signup(request);
        try {
    public ResponseEntity<?> signup(@Valid @RequestBody AuthRequest.SignupRequest request) {
    @PostMapping("/signup")

    private AuthService authService;
    @Autowired

public class AuthController {
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
@RequestMapping("/api/auth")
@RestController

import java.util.Map;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.validation.Valid;
import com.plugin.erogonomics.service.AuthService;
import com.plugin.erogonomics.dto.AuthResponse;
import com.plugin.erogonomics.dto.AuthRequest;


