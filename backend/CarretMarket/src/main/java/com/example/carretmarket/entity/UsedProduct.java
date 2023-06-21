package com.example.carretmarket.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.example.carretmarket.dto.UsedProductReqDto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Getter
public class UsedProduct {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private double price;

    @Column(nullable = false)
    private String address;
    
    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;

    // TODO 좋아요기능
    
    public UsedProduct(String title, double price, String address, Account account) {
        this.title = title;
        this.price = price;
        this.address = address;
        this.account = account;
    }

    public void updateUsedProduct(String title, double price, String address, Account account) {
        this.title = title;
        this.price = price;
        this.address = address;
        this.account = account;
    }
}
