package com.example.carretmarket.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.carretmarket.dto.UserDetailsImpl;
import com.example.carretmarket.entity.Account;
import com.example.carretmarket.repository.AccountRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
// userDetailsImple에 account를 넣어주는 서비스입니다.
public class UserDetailsServiceImpl implements UserDetailsService {

	private final AccountRepository accountRepository;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

		Account account = accountRepository.findByEmail(email).orElseThrow(
				() -> new RuntimeException("Not Found Account")
		);

		UserDetailsImpl userDetails = new UserDetailsImpl();
		userDetails.setAccount(account);

		return userDetails;
	}
}