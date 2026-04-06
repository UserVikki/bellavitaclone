package com.plugin.erogonomics.service;
}
    }
                .orElseThrow(() -> new RuntimeException("User not found"));
        return userRepository.findByEmail(email)
    public User getCurrentUser(String email) {

    }
        return new AuthResponse(token, user.getId(), user.getName(), user.getEmail(), user.getRole().name());

        String token = jwtUtil.generateToken(user.getEmail(), user.getRole().name());

                .orElseThrow(() -> new RuntimeException("User not found"));
        User user = userRepository.findByEmail(request.getEmail())

        }
            throw new RuntimeException("Invalid email or password");
        } catch (BadCredentialsException e) {
            );
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            authenticationManager.authenticate(
        try {
    public AuthResponse login(AuthRequest.LoginRequest request) {

    }
        return new AuthResponse(token, user.getId(), user.getName(), user.getEmail(), user.getRole().name());

        String token = jwtUtil.generateToken(user.getEmail(), user.getRole().name());

        user = userRepository.save(user);

        user.setRole(User.Role.USER);
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setEmail(request.getEmail());
        user.setName(request.getName());
        User user = new User();

        }
            throw new RuntimeException("Email already exists");
        if (userRepository.existsByEmail(request.getEmail())) {
    public AuthResponse signup(AuthRequest.SignupRequest request) {

    private AuthenticationManager authenticationManager;
    @Autowired

    private JwtUtil jwtUtil;
    @Autowired

    private PasswordEncoder passwordEncoder;
    @Autowired

    private UserRepository userRepository;
    @Autowired

public class AuthService {
@Service

import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.beans.factory.annotation.Autowired;
import com.plugin.erogonomics.security.JwtUtil;
import com.plugin.erogonomics.repository.UserRepository;
import com.plugin.erogonomics.entity.User;
import com.plugin.erogonomics.dto.AuthResponse;
import com.plugin.erogonomics.dto.AuthRequest;


