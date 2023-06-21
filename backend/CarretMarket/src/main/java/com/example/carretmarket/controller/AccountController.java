package com.example.carretmarket.controller;

import java.util.Collections;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.carretmarket.dto.AccountReqDto;
import com.example.carretmarket.dto.GlobalResDto;
import com.example.carretmarket.dto.LoginReqDto;
import com.example.carretmarket.service.AccountService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/account") 
public class AccountController {

	private final AccountService accountService;

	// 회원가입
    @PostMapping("/join")
    public GlobalResDto join(@RequestBody AccountReqDto accountReqDto) {
    	return accountService.signup(accountReqDto);
    }

    // 로그인
    @PostMapping("/login")
    public ResponseEntity<GlobalResDto> login(@RequestBody LoginReqDto loginReqDto, HttpServletResponse response) {
    	try {
            GlobalResDto result = accountService.login(loginReqDto, response);
            return ResponseEntity.ok(result);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new GlobalResDto(e.getMessage(), HttpStatus.UNAUTHORIZED.value()));
        }
    }
}
