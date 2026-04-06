import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isAdded, setIsAdded] = useState(false);

  const product = products.find(p => p.id === parseInt(id));
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="product-not-found">
        <div className="container">
          <h1>Product Not Found</h1>
          <p>The product you're looking for doesn't exist.</p>
          <Link to="/shop" className="btn btn-primary">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-detail">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/shop">Shop</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`}>{product.category}</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        <div className="product-detail__main">
          {/* Image Gallery */}
          <div className="product-detail__gallery">
            <div className="gallery-main">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
              />
              {product.badge && (
                <span className={`badge badge-${product.badge}`}>
                  {product.badge}
                </span>
              )}
            </div>
            <div className="gallery-thumbs">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`gallery-thumb ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-detail__info">
            <span className="product-detail__category">{product.category}</span>
            <h1>{product.name}</h1>

            <div className="product-detail__rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(product.rating) ? 'star filled' : 'star'}>
                    ★
                  </span>
                ))}
              </div>
              <span className="rating-value">{product.rating}</span>
              <span className="review-count">({product.reviews} reviews)</span>
            </div>

            <div className="product-detail__price">
              <span className="price-current">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="price-original">${product.originalPrice.toFixed(2)}</span>
                  <span className="price-discount">Save {discount}%</span>
                </>
              )}
            </div>

            <p className="product-detail__description">{product.description}</p>

            <div className="product-detail__actions">
              <div className="quantity-selector">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                >
                  −
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)}>
                  +
                </button>
              </div>
              <button
                className={`btn btn-primary btn-lg add-to-cart ${isAdded ? 'added' : ''}`}
                onClick={handleAddToCart}
              >
                {isAdded ? '✓ Added to Cart' : 'Add to Cart'}
              </button>
            </div>

            <div className="product-detail__meta">
              <div className="meta-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13"/>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="meta-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 12 20 22 4 22 4 12"/>
                  <rect x="2" y="7" width="20" height="5"/>
                  <line x1="12" y1="22" x2="12" y2="7"/>
                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
                </svg>
                <span>Gift wrap available</span>
              </div>
              <div className="meta-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
                <span>Eco-friendly packaging</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="product-detail__tabs">
          <div className="tabs-nav">
            <button
              className={activeTab === 'description' ? 'active' : ''}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={activeTab === 'ingredients' ? 'active' : ''}
              onClick={() => setActiveTab('ingredients')}
            >
              Ingredients
            </button>
            <button
              className={activeTab === 'how-to-use' ? 'active' : ''}
              onClick={() => setActiveTab('how-to-use')}
            >
              How to Use
            </button>
            <button
              className={activeTab === 'reviews' ? 'active' : ''}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews ({product.reviews})
            </button>
          </div>
          <div className="tabs-content">
            {activeTab === 'description' && (
              <div className="tab-panel">
                <p>{product.description}</p>
              </div>
            )}
            {activeTab === 'ingredients' && (
              <div className="tab-panel">
                <p><strong>Key Ingredients:</strong></p>
                <p>{product.ingredients}</p>
              </div>
            )}
            {activeTab === 'how-to-use' && (
              <div className="tab-panel">
                <p>{product.howToUse}</p>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="tab-panel reviews">
                <div className="reviews-summary">
                  <div className="reviews-score">
                    <span className="score">{product.rating}</span>
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(product.rating) ? 'star filled' : 'star'}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="count">Based on {product.reviews} reviews</span>
                  </div>
                </div>
                <div className="review-item">
                  <div className="review-header">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="star filled">★</span>
                      ))}
                    </div>
                    <span className="review-date">2 weeks ago</span>
                  </div>
                  <h4>Love this product!</h4>
                  <p>I've been using this for a month now and I can already see a difference in my skin. It's so hydrating and the scent is amazing!</p>
                  <span className="reviewer">— Sarah M.</span>
                </div>
                <div className="review-item">
                  <div className="review-header">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < 4 ? 'star filled' : 'star'}>★</span>
                      ))}
                    </div>
                    <span className="review-date">1 month ago</span>
                  </div>
                  <h4>Great quality</h4>
                  <p>The packaging is beautiful and the product itself is high quality. Would definitely recommend to anyone looking for natural skincare.</p>
                  <span className="reviewer">— Emily R.</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="related-products">
            <div className="section-title">
              <h2>You May Also Like</h2>
              <p>Similar products you might enjoy</p>
            </div>
            <div className="products-grid">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

