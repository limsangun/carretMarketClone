package com.example.carretmarket.dto;


import com.example.carretmarket.entity.Account;

import lombok.Data;

@Data
public class UsedProductReqDto {
	
	private Long id;

	private String title;

    private double price;

    private String address;
    
    private Long accountId;
    
    public UsedProductReqDto(Long accountId, String title, double price, String address) {
        this.accountId = accountId;
        this.title = title;
        this.price = price;
        this.address = address;
    }
}
