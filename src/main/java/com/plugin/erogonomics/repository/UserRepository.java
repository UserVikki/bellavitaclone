package com.plugin.erogonomics.repository;
}
    boolean existsByEmail(String email);
    Optional<User> findByEmail(String email);
public interface UserRepository extends JpaRepository<User, Long> {
@Repository

import java.util.Optional;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.plugin.erogonomics.entity.User;


