import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import './Shop.css';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categoryParam = searchParams.get('category') || '';
  const searchQuery = searchParams.get('search') || '';
  const sortBy = searchParams.get('sort') || 'featured';
  const priceRange = searchParams.get('price') || '';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (categoryParam) {
      result = result.filter(p => p.category === categoryParam);
    }

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    }

    // Filter by price
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter(p => p.price >= min && (max ? p.price <= max : true));
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => (b.badge === 'new' ? 1 : 0) - (a.badge === 'new' ? 1 : 0));
        break;
      default:
        // Featured - bestsellers first
        result.sort((a, b) => (b.badge === 'bestseller' ? 1 : 0) - (a.badge === 'bestseller' ? 1 : 0));
    }

    return result;
  }, [categoryParam, searchQuery, sortBy, priceRange]);

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const priceRanges = [
    { value: '', label: 'All Prices' },
    { value: '0-25', label: 'Under $25' },
    { value: '25-50', label: '$25 - $50' },
    { value: '50-100', label: '$50 - $100' },
    { value: '100-', label: 'Over $100' },
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
  ];

  return (
    <div className="shop">
      <div className="shop__header">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Shop</span>
            {categoryParam && (
              <>
                <span>/</span>
                <span>{categories.find(c => c.id === categoryParam)?.name || categoryParam}</span>
              </>
            )}
          </nav>
          <h1>
            {categoryParam
              ? categories.find(c => c.id === categoryParam)?.name || 'Products'
              : searchQuery
                ? `Search: "${searchQuery}"`
                : 'All Products'
            }
          </h1>
          <p>{filteredProducts.length} products</p>
        </div>
      </div>

      <div className="container">
        <div className="shop__layout">
          {/* Mobile Filter Toggle */}
          <button
            className="shop__filter-toggle"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="21" x2="4" y2="14"/>
              <line x1="4" y1="10" x2="4" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12" y2="3"/>
              <line x1="20" y1="21" x2="20" y2="16"/>
              <line x1="20" y1="12" x2="20" y2="3"/>
              <line x1="1" y1="14" x2="7" y2="14"/>
              <line x1="9" y1="8" x2="15" y2="8"/>
              <line x1="17" y1="16" x2="23" y2="16"/>
            </svg>
            Filters
          </button>

          {/* Sidebar */}
          <aside className={`shop__sidebar ${isFilterOpen ? 'active' : ''}`}>
            <div className="sidebar-header">
              <h3>Filters</h3>
              {(categoryParam || priceRange) && (
                <button className="clear-filters" onClick={clearFilters}>
                  Clear All
                </button>
              )}
            </div>

            <div className="filter-group">
              <h4>Categories</h4>
              <ul className="filter-list">
                <li>
                  <button
                    className={!categoryParam ? 'active' : ''}
                    onClick={() => updateFilter('category', '')}
                  >
                    All Products
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      className={categoryParam === cat.id ? 'active' : ''}
                      onClick={() => updateFilter('category', cat.id)}
                    >
                      {cat.name}
                      <span className="count">({cat.count})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="filter-group">
              <h4>Price Range</h4>
              <ul className="filter-list">
                {priceRanges.map((range) => (
                  <li key={range.value}>
                    <button
                      className={priceRange === range.value ? 'active' : ''}
                      onClick={() => updateFilter('price', range.value)}
                    >
                      {range.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className="sidebar-close"
              onClick={() => setIsFilterOpen(false)}
            >
              Apply Filters
            </button>
          </aside>

          {/* Main Content */}
          <main className="shop__main">
            <div className="shop__toolbar">
              <div className="shop__sort">
                <label>Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="shop__grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="shop__empty">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
                <h3>No products found</h3>
                <p>Try adjusting your filters or search query</p>
                <button className="btn btn-primary" onClick={clearFilters}>
                  Clear Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {isFilterOpen && (
        <div className="shop__overlay" onClick={() => setIsFilterOpen(false)} />
      )}
    </div>
  );
};

export default Shop;

