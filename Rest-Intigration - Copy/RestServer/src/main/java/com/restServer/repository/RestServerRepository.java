package com.restServer.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.restServer.entity.Product;

@Repository
public interface RestServerRepository extends JpaRepository<Product, Integer> {
	@Query("select p from Product p where p.category = ?1")
	 public List<Product>getProductByCategory(String category);
}
