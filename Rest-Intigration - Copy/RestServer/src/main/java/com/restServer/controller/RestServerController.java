package com.restServer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.restServer.entity.Product;
import com.restServer.service.RestServerService;

@RestController
@RequestMapping("/RestServer")
public class RestServerController {
	@Autowired
private RestServerService service;

	
	@GetMapping("/products")
	public List<Product> getProducts() {
		System.out.println("GraphQl Client call");
		return service.getProducts();
		}

	@GetMapping("/products/{category}")
	public List<Product> getProductByCategory(@PathVariable String category) {
		System.out.println("GraphQl Client call");
		return service.getProductByCategory(category);
	}
	
    @PostMapping("/addProduct")
	public Product addProduct(@RequestBody Product pdt) {
		return service.addProduct(pdt);
	}
	@DeleteMapping("/deleteProduct/{id}")
	public String deleteProduct(@PathVariable int id) {
		return service.deleteProduct(id);
	}

	
}
