package com.example.carretmarket.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.carretmarket.entity.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {
    Optional<Account> findByEmail(String email);
}