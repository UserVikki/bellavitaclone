package com.plugin.erogonomics.service;

import com.plugin.erogonomics.dto.ProductDTO;
import com.plugin.erogonomics.entity.Product;
import com.plugin.erogonomics.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + id));
    }

    public List<Product> getProductsByCategory(String category) {
        return productRepository.findByCategory(category);
    }

    public List<Product> getBestsellers() {
        return productRepository.findByBadge("bestseller");
    }

    public Product createProduct(ProductDTO productDTO) {
        Product product = new Product();
        mapDtoToEntity(productDTO, product);
        return productRepository.save(product);
    }

    public Product updateProduct(Long id, ProductDTO productDTO) {
        Product product = getProductById(id);
        mapDtoToEntity(productDTO, product);
        return productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        Product product = getProductById(id);
        productRepository.delete(product);
    }

    private void mapDtoToEntity(ProductDTO dto, Product entity) {
        entity.setName(dto.getName());
        entity.setCategory(dto.getCategory());
        entity.setSubcategory(dto.getSubcategory());
        entity.setPrice(dto.getPrice());
        entity.setOriginalPrice(dto.getOriginalPrice());
        entity.setRating(dto.getRating());
        entity.setReviews(dto.getReviews());
        entity.setDescription(dto.getDescription());
        entity.setIngredients(dto.getIngredients());
        entity.setHowToUse(dto.getHowToUse());
        entity.setImages(dto.getImages());
        entity.setBadge(dto.getBadge());
        entity.setInStock(dto.getInStock() != null ? dto.getInStock() : true);
    }
}

