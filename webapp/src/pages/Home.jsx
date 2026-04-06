import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import { products, categories, testimonials, collections, instagramPosts } from '../data/products';
import './Home.css';

const Home = () => {
  const bestSellers = products.filter(p => p.badge === 'bestseller');
  const newArrivals = products.filter(p => p.badge === 'new');

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__background">
          <img
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920"
            alt="Beauty products"
          />
          <div className="hero__overlay"></div>
        </div>
        <div className="container hero__content">
          <span className="hero__label">Natural Beauty</span>
          <h1>Discover Your Natural Radiance</h1>
          <p>Premium botanical skincare crafted with love. Transform your beauty routine with nature's finest ingredients.</p>
          <div className="hero__buttons">
            <Link to="/shop" className="btn btn-primary btn-lg">Shop Now</Link>
            <Link to="/shop?category=skincare" className="btn btn-white btn-lg">Explore Skincare</Link>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="features-bar">
        <div className="container">
          <div className="features-grid">
            <div className="feature">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <div>
                <h4>100% Natural</h4>
                <p>Pure botanical ingredients</p>
              </div>
            </div>
            <div className="feature">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              <div>
                <h4>Fast Delivery</h4>
                <p>Free shipping over $50</p>
              </div>
            </div>
            <div className="feature">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              <div>
                <h4>Cruelty-Free</h4>
                <p>Never tested on animals</p>
              </div>
            </div>
            <div className="feature">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
              <div>
                <h4>Eco-Packaging</h4>
                <p>Sustainable materials</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section categories">
        <div className="container">
          <div className="section-title">
            <h2>Shop by Category</h2>
            <p>Find the perfect products for your beauty routine</p>
          </div>
          <div className="categories-grid">
            {categories.map((category) => (
              <Link
                to={`/shop?category=${category.id}`}
                key={category.id}
                className="category-card"
              >
                <div className="category-card__image">
                  <img src={category.image} alt={category.name} />
                </div>
                <div className="category-card__content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <span className="category-card__count">{category.count} Products</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="section best-sellers">
        <div className="container">
          <div className="section-title">
            <h2>Best Sellers</h2>
            <p>Our most loved products by customers worldwide</p>
          </div>
          <div className="products-grid">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="section-cta">
            <Link to="/shop" className="btn btn-outline">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Featured Collection Banner */}
      <section className="featured-banner">
        <div className="container">
          <div className="featured-banner__grid">
            <div className="featured-banner__content">
              <span className="featured-banner__label">Limited Edition</span>
              <h2>Summer Glow Collection</h2>
              <p>Unlock your summer radiance with our exclusive collection of lightweight, nourishing products designed for the warmer months. Featuring vitamin C serums, hydrating mists, and sun-kissed highlights.</p>
              <Link to="/shop" className="btn btn-primary">Shop Collection</Link>
            </div>
            <div className="featured-banner__image">
              <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800" alt="Summer Collection" />
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="section new-arrivals">
        <div className="container">
          <div className="section-title">
            <h2>New Arrivals</h2>
            <p>The latest additions to our collection</p>
          </div>
          <div className="products-grid">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="section collections">
        <div className="container">
          <div className="section-title">
            <h2>Featured Collections</h2>
            <p>Curated sets for every skincare need</p>
          </div>
          <div className="collections-grid">
            {collections.map((collection) => (
              <Link
                to="/shop"
                key={collection.id}
                className="collection-card"
              >
                <div className="collection-card__image">
                  <img src={collection.image} alt={collection.name} />
                </div>
                <div className="collection-card__content">
                  <h3>{collection.name}</h3>
                  <p>{collection.description}</p>
                  <span className="collection-card__link">Shop Now →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-title">
            <h2>What Our Customers Say</h2>
            <p>Real reviews from real people</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-card__stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star filled">★</span>
                  ))}
                </div>
                <p className="testimonial-card__text">"{testimonial.text}"</p>
                <div className="testimonial-card__author">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.location}</p>
                  </div>
                </div>
                <span className="testimonial-card__product">Purchased: {testimonial.product}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="section instagram">
        <div className="container">
          <div className="section-title">
            <h2>@luxebotanica</h2>
            <p>Follow us on Instagram for daily beauty inspiration</p>
          </div>
          <div className="instagram-grid">
            {instagramPosts.map((post) => (
              <a
                href={post.link}
                key={post.id}
                className="instagram-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={post.image} alt="Instagram post" />
                <div className="instagram-card__overlay">
                  <span>❤ {post.likes.toLocaleString()}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default Home;

