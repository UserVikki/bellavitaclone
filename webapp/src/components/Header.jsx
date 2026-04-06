import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount } = useCart();
  const { user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/shop', label: 'Shop All' },
    { to: '/shop?category=skincare', label: 'Skincare' },
    { to: '/shop?category=haircare', label: 'Hair Care' },
    { to: '/shop?category=fragrance', label: 'Fragrance' },
    { to: '/shop?category=bodycare', label: 'Body Care' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__announcement">
        <p>✨ Free shipping on orders over $50 | Use code GLOW20 for 20% off ✨</p>
      </div>

      <div className="header__main">
        <div className="container header__container">
          <button
            className="header__mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <Link to="/" className="header__logo">
            <span className="logo-text">Luxe Botanica</span>
          </Link>

          <nav className={`header__nav ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.to} className="nav-item">
                  <Link to={link.to} className="nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <button
              className="header__action-btn"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </button>

            <Link to={user ? '/account' : '/login'} className="header__action-btn" aria-label="Account">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </Link>

            <Link to="/cart" className="header__action-btn header__cart" aria-label="Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                <path d="M3 6h18"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
          </div>
        </div>
      </div>

      <div className={`header__search ${isSearchOpen ? 'active' : ''}`}>
        <div className="container">
          <form className="search-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <Link
              to={`/shop?search=${searchQuery}`}
              className="search-btn"
              onClick={() => setIsSearchOpen(false)}
            >
              Search
            </Link>
          </form>
          <button
            className="search-close"
            onClick={() => setIsSearchOpen(false)}
          >
            ✕
          </button>
        </div>
      </div>

      {isMobileMenuOpen && <div className="header__overlay" onClick={() => setIsMobileMenuOpen(false)} />}
    </header>
  );
};

export default Header;

