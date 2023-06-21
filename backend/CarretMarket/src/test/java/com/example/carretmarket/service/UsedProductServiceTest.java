package com.example.carretmarket.service;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.annotation.Commit;

import com.example.carretmarket.dto.GlobalResDto;
import com.example.carretmarket.dto.UsedProductReqDto;

@SpringBootTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Transactional
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class UsedProductServiceTest {
	
	@Autowired
	private UsedProductService usedProductService;

	@Test
	@Commit
	public void createMultipleUsedProductsTest() {
		Long accountId = 1L; // 사용할 계정 ID 설정

		List<UsedProductReqDto> usedProductReqDtoList = new ArrayList<>();

	    // UsedProductReqDto 객체 생성 및 리스트에 추가
	    usedProductReqDtoList.add(new UsedProductReqDto(accountId, "Used Product 1", 1000, "Address 1"));
	    usedProductReqDtoList.add(new UsedProductReqDto(accountId, "Used Product 2", 2000, "Address 2"));
	    usedProductReqDtoList.add(new UsedProductReqDto(accountId, "Used Product 3", 3000, "Address 3"));
	    usedProductReqDtoList.add(new UsedProductReqDto(accountId, "Used Product 4", 4000, "Address 4"));
	    usedProductReqDtoList.add(new UsedProductReqDto(accountId, "Used Product 5", 5000, "Address 5"));
	    usedProductReqDtoList.add(new UsedProductReqDto(accountId, "Used Product 6", 6000, "Address 6"));
	    usedProductReqDtoList.add(new UsedProductReqDto(accountId, "Used Product 7", 7000, "Address 7"));
	    usedProductReqDtoList.add(new UsedProductReqDto(accountId, "Used Product 8", 8000, "Address 8"));
	    usedProductReqDtoList.add(new UsedProductReqDto(accountId, "Used Product 9", 9000, "Address 9"));
	    usedProductReqDtoList.add(new UsedProductReqDto(accountId, "Used Product 10", 10000, "Address 10"));

	    for (UsedProductReqDto usedProductReqDto : usedProductReqDtoList) {
	        GlobalResDto result = usedProductService.createUsedProduct(usedProductReqDto, new MockHttpServletResponse());
	        assertEquals(HttpStatus.OK.value(), result.getStatusCode());
	    }
	}

}
