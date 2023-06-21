package com.example.carretmarket.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;

import com.example.carretmarket.dto.AccountReqDto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @NotBlank
    private String email;
    @NotBlank
    private String pw;
    
    @OneToMany(mappedBy = "account")
    private List<UsedProduct> usedProducts = new ArrayList<>();

    public Account(AccountReqDto accountReqDto) {
        this.email = accountReqDto.getEmail();
        this.pw = accountReqDto.getPw();
    }
}