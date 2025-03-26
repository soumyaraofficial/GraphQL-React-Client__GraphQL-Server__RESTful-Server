package com.restServer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restServer.entity.Product;
import com.restServer.repository.RestServerRepository;

@Service
public class RestServerService {

	@Autowired
	private RestServerRepository repo;

	public List<Product> getProducts() {
		return repo.findAll();
	}

	public List<Product> getProductByCategory(String category) {
		return repo.getProductByCategory(category);
	}
	
	public Product addProduct(Product pdt) {
		return repo.save(pdt);
	}
	
	public String deleteProduct(int id) {
		@SuppressWarnings("deprecation")
		Product pdt = repo.getById(id);
        
		if(pdt!=null) {
			repo.delete(pdt);
			return " Delete successfull";
		}else {
			return "Error no product found";
		}
		
	}

}
