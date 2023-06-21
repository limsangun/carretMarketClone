package com.example.carretmarket.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.carretmarket.entity.UsedProduct;

public interface UsedProductRepository extends JpaRepository<UsedProduct, Long>{

}
