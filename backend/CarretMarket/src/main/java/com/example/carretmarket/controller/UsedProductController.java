package com.example.carretmarket.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.carretmarket.dto.GlobalResDto;
import com.example.carretmarket.dto.UsedProductReqDto;
import com.example.carretmarket.entity.UsedProduct;
import com.example.carretmarket.service.UsedProductService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/usedProduct") 
public class UsedProductController {

	private final UsedProductService usedProductService;
	
	@PostMapping("/create")
	public ResponseEntity<GlobalResDto> createUsedProduct(@RequestBody UsedProductReqDto usedProductReqDto, HttpServletResponse response) {
        
		try {
			GlobalResDto result = usedProductService.createUsedProduct(usedProductReqDto, response);
			return ResponseEntity.ok(result);
		} catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new GlobalResDto(e.getMessage(), HttpStatus.UNAUTHORIZED.value()));
        }
        
    }
}
