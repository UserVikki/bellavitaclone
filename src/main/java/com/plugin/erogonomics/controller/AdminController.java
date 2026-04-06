package com.plugin.erogonomics.controller;

import com.plugin.erogonomics.dto.OrderDTO;
import com.plugin.erogonomics.dto.ProductDTO;
import com.plugin.erogonomics.dto.UserDTO;
import com.plugin.erogonomics.entity.Order;
import com.plugin.erogonomics.entity.Product;
import com.plugin.erogonomics.service.OrderService;
import com.plugin.erogonomics.service.ProductService;
import com.plugin.erogonomics.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@PreAuthorize("hasRole('ADMIN')")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class AdminController {

    @Autowired
    private ProductService productService;

    @Autowired
    private OrderService orderService;

    @Autowired
    private UserService userService;

    // ==================== Product Management ====================

    @PostMapping("/products")
    public ResponseEntity<Product> createProduct(@RequestBody ProductDTO productDTO) {
        return ResponseEntity.ok(productService.createProduct(productDTO));
    }

    @PutMapping("/products/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody ProductDTO productDTO) {
        return ResponseEntity.ok(productService.updateProduct(id, productDTO));
    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.ok(Map.of("message", "Product deleted successfully"));
    }

    // ==================== Order Management ====================

    @GetMapping("/orders")
    public ResponseEntity<List<OrderDTO.OrderResponse>> getAllOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    @PutMapping("/orders/{id}/status")
    public ResponseEntity<Order> updateOrderStatus(
            @PathVariable Long id,
            @RequestBody Map<String, String> request) {
        Order.OrderStatus status = Order.OrderStatus.valueOf(request.get("status"));
        return ResponseEntity.ok(orderService.updateOrderStatus(id, status));
    }

    // ==================== User Management ====================

    @GetMapping("/users")
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok(Map.of("message", "User deleted successfully"));
    }

    // ==================== Dashboard Stats ====================

    @GetMapping("/stats")
    public ResponseEntity<?> getDashboardStats() {
        List<UserDTO> users = userService.getAllUsers();
        List<Product> products = productService.getAllProducts();
        List<OrderDTO.OrderResponse> orders = orderService.getAllOrders();

        return ResponseEntity.ok(Map.of(
                "totalUsers", users.size(),
                "totalProducts", products.size(),
                "totalOrders", orders.size(),
                "recentOrders", orders.stream().limit(5).toList()
        ));
    }
}

