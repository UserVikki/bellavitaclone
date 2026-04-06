package com.plugin.erogonomics.config;

import com.plugin.erogonomics.entity.Product;
import com.plugin.erogonomics.entity.User;
import com.plugin.erogonomics.repository.ProductRepository;
import com.plugin.erogonomics.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.Arrays;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        // Create admin user if not exists
        if (!userRepository.existsByEmail("admin@bellavita.com")) {
            User admin = new User();
            admin.setName("Admin User");
            admin.setEmail("admin@bellavita.com");
            admin.setPassword(passwordEncoder.encode("admin123"));
            admin.setRole(User.Role.ADMIN);
            userRepository.save(admin);
            System.out.println("Admin user created: admin@bellavita.com / admin123");
        }

        // Create sample user if not exists
        if (!userRepository.existsByEmail("user@bellavita.com")) {
            User user = new User();
            user.setName("Test User");
            user.setEmail("user@bellavita.com");
            user.setPassword(passwordEncoder.encode("user123"));
            user.setRole(User.Role.USER);
            userRepository.save(user);
            System.out.println("Test user created: user@bellavita.com / user123");
        }

        // Seed products if empty
        if (productRepository.count() == 0) {
            seedProducts();
            System.out.println("Sample products seeded!");
        }
    }

    private void seedProducts() {
        Product p1 = new Product();
        p1.setName("Rose Glow Serum");
        p1.setCategory("skincare");
        p1.setSubcategory("serums");
        p1.setPrice(new BigDecimal("45.00"));
        p1.setOriginalPrice(new BigDecimal("55.00"));
        p1.setRating(4.8);
        p1.setReviews(234);
        p1.setDescription("A luxurious rose-infused serum that delivers intense hydration and a natural, radiant glow.");
        p1.setIngredients("Rosa Canina Fruit Oil, Vitamin E, Hyaluronic Acid, Jojoba Oil, Rose Extract");
        p1.setHowToUse("Apply 3-4 drops to cleansed face and neck. Use morning and evening.");
        p1.setImages(Arrays.asList(
            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600",
            "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600"
        ));
        p1.setBadge("bestseller");
        p1.setInStock(true);
        productRepository.save(p1);

        Product p2 = new Product();
        p2.setName("Lavender Dreams Night Cream");
        p2.setCategory("skincare");
        p2.setSubcategory("moisturizers");
        p2.setPrice(new BigDecimal("38.00"));
        p2.setRating(4.7);
        p2.setReviews(189);
        p2.setDescription("Wake up to softer, more supple skin with our calming lavender night cream.");
        p2.setIngredients("Lavender Essential Oil, Shea Butter, Vitamin C, Aloe Vera, Chamomile Extract");
        p2.setHowToUse("Apply a small amount to face and neck after cleansing. Use every night.");
        p2.setImages(Arrays.asList(
            "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600",
            "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=600"
        ));
        p2.setInStock(true);
        productRepository.save(p2);

        Product p3 = new Product();
        p3.setName("Citrus Burst Body Mist");
        p3.setCategory("fragrance");
        p3.setSubcategory("body-mist");
        p3.setPrice(new BigDecimal("28.00"));
        p3.setOriginalPrice(new BigDecimal("35.00"));
        p3.setRating(4.9);
        p3.setReviews(312);
        p3.setDescription("An invigorating citrus body mist that awakens your senses.");
        p3.setIngredients("Orange Peel Oil, Lemon Extract, Bergamot, Grapefruit Essential Oil");
        p3.setHowToUse("Spray generously on pulse points and body.");
        p3.setImages(Arrays.asList(
            "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600"
        ));
        p3.setBadge("new");
        p3.setInStock(true);
        productRepository.save(p3);

        Product p4 = new Product();
        p4.setName("Vanilla Orchid Perfume");
        p4.setCategory("fragrance");
        p4.setSubcategory("perfume");
        p4.setPrice(new BigDecimal("65.00"));
        p4.setRating(4.6);
        p4.setReviews(156);
        p4.setDescription("An enchanting blend of warm vanilla and exotic orchid.");
        p4.setIngredients("Vanilla Extract, Orchid Essence, Sandalwood, Musk, Jasmine");
        p4.setHowToUse("Apply to pulse points - wrists, neck, behind ears.");
        p4.setImages(Arrays.asList(
            "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600"
        ));
        p4.setInStock(true);
        productRepository.save(p4);

        Product p5 = new Product();
        p5.setName("Coconut Milk Hair Mask");
        p5.setCategory("haircare");
        p5.setSubcategory("treatments");
        p5.setPrice(new BigDecimal("32.00"));
        p5.setOriginalPrice(new BigDecimal("40.00"));
        p5.setRating(4.8);
        p5.setReviews(278);
        p5.setDescription("Deeply nourishing hair mask infused with coconut milk and argan oil.");
        p5.setIngredients("Coconut Milk, Argan Oil, Keratin, Vitamin E, Honey Extract");
        p5.setHowToUse("Apply to damp hair. Leave for 10-15 minutes. Rinse thoroughly.");
        p5.setImages(Arrays.asList(
            "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=600"
        ));
        p5.setBadge("bestseller");
        p5.setInStock(true);
        productRepository.save(p5);

        Product p6 = new Product();
        p6.setName("Green Tea Cleansing Gel");
        p6.setCategory("skincare");
        p6.setSubcategory("cleansers");
        p6.setPrice(new BigDecimal("24.00"));
        p6.setRating(4.5);
        p6.setReviews(145);
        p6.setDescription("A gentle yet effective cleansing gel enriched with green tea antioxidants.");
        p6.setIngredients("Green Tea Extract, Glycerin, Cucumber Extract, Witch Hazel");
        p6.setHowToUse("Massage onto wet face. Rinse thoroughly with lukewarm water.");
        p6.setImages(Arrays.asList(
            "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600"
        ));
        p6.setInStock(true);
        productRepository.save(p6);

        Product p7 = new Product();
        p7.setName("Honey Almond Body Butter");
        p7.setCategory("bodycare");
        p7.setSubcategory("body-butter");
        p7.setPrice(new BigDecimal("35.00"));
        p7.setOriginalPrice(new BigDecimal("42.00"));
        p7.setRating(4.9);
        p7.setReviews(423);
        p7.setDescription("Luxuriously rich body butter with organic honey and sweet almond oil.");
        p7.setIngredients("Sweet Almond Oil, Organic Honey, Shea Butter, Cocoa Butter");
        p7.setHowToUse("Apply liberally to body after bathing.");
        p7.setImages(Arrays.asList(
            "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600"
        ));
        p7.setBadge("bestseller");
        p7.setInStock(true);
        productRepository.save(p7);

        Product p8 = new Product();
        p8.setName("Charcoal Detox Face Mask");
        p8.setCategory("skincare");
        p8.setSubcategory("masks");
        p8.setPrice(new BigDecimal("29.00"));
        p8.setRating(4.4);
        p8.setReviews(98);
        p8.setDescription("A powerful detoxifying face mask with activated charcoal.");
        p8.setIngredients("Activated Charcoal, Kaolin Clay, Tea Tree Oil, Eucalyptus");
        p8.setHowToUse("Apply thin layer to clean face. Leave for 10-15 minutes.");
        p8.setImages(Arrays.asList(
            "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600"
        ));
        p8.setBadge("new");
        p8.setInStock(true);
        productRepository.save(p8);
    }
}

