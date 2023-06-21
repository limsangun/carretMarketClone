package com.example.carretmarket.service;

import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.carretmarket.dto.GlobalResDto;
import com.example.carretmarket.dto.UsedProductReqDto;
import com.example.carretmarket.entity.Account;
import com.example.carretmarket.entity.UsedProduct;
import com.example.carretmarket.repository.AccountRepository;
import com.example.carretmarket.repository.UsedProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UsedProductService {
	
	private final UsedProductRepository usedProductRepository;
	private final AccountRepository accountRepository;

	public GlobalResDto createUsedProduct(UsedProductReqDto usedProductReqDto, HttpServletResponse response) {
		// 사용자로부터 받은 데이터를 이용하여 UsedProduct 객체 생성
        Long accountId = usedProductReqDto.getAccountId();
        
        // accountId를 사용하여 Account 엔티티 조회
        Optional<Account> accountOptional = accountRepository.findById(accountId);
        if (!accountOptional.isPresent()) {
            // 계정이 존재하지 않을 경우 에러 처리
            return new GlobalResDto("계정이 존재하지않습니다.", HttpStatus.BAD_REQUEST.value());
        }	
        
        // Account 엔티티 가져오기
        Account account = accountOptional.get();
        UsedProduct usedProduct;
        
        if (usedProductReqDto.getId() != null) {
        	// Update existing UsedProduct
            Optional<UsedProduct> existingProductOptional = usedProductRepository.findById(usedProductReqDto.getId());
            if (existingProductOptional.isEmpty()) {
                return new GlobalResDto("Used product not found", HttpStatus.BAD_REQUEST.value());
            }
            usedProduct = existingProductOptional.get();
            usedProduct.updateUsedProduct(usedProductReqDto.getTitle(), usedProductReqDto.getPrice(), usedProductReqDto.getAddress(), account);
        } else {
        	// Create new UsedProduct
            usedProduct = new UsedProduct(usedProductReqDto.getTitle(), usedProductReqDto.getPrice(), usedProductReqDto.getAddress(), account);
        }

        // Save UsedProduct
        usedProductRepository.save(usedProduct);

        return new GlobalResDto("Used product created or updated successfully", HttpStatus.OK.value());
	}

}
