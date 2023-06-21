package com.example.carretmarket.service;

import com.example.carretmarket.dto.AccountReqDto;
import com.example.carretmarket.dto.GlobalResDto;
import com.example.carretmarket.dto.LoginReqDto;
import com.example.carretmarket.entity.Account;
import com.example.carretmarket.repository.AccountRepository;
import com.example.carretmarket.service.AccountService;

import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jdbc.EmbeddedDatabaseConnection;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.annotation.Commit;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Transactional
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class AccountServiceTest {

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AccountService accountService;
    
    // 회원 가입에 사용할 계정 정보
    private AccountReqDto accountReqDto;

    @Test
    @Order(1)
    @Commit
    public void signupTest() {
    	// Given
        accountReqDto = new AccountReqDto("test5", "1234", "1234");

        // When
        GlobalResDto result = accountService.signup(accountReqDto);

        // Then
        assertEquals(HttpStatus.OK.value(), result.getStatusCode());
        assertNotNull(accountRepository.findByEmail(accountReqDto.getEmail()));
       
    }

    @Test
    @Order(2)
    @Commit
    public void signinTest() {
    	
    	// Given (이 부분이 추가되었습니다)
        if (accountReqDto == null) {
            accountReqDto = new AccountReqDto("test5", "1234", "1234");
        }
        System.out.println(accountReqDto.getEmail());
        // 로그인 요청 객체 생성
        LoginReqDto loginReqDto = new LoginReqDto(accountReqDto.getEmail(), accountReqDto.getPw());

        // When
        GlobalResDto result = accountService.login(loginReqDto, new MockHttpServletResponse());

        // Then
        assertEquals(HttpStatus.OK.value(), result.getStatusCode());
        assertNotNull(accountRepository.findByEmail(loginReqDto.getEmail()));
    }
}