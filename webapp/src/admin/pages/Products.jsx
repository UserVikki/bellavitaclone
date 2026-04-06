import React, { useState, useEffect } from 'react';
import { productsAPI, adminAPI } from '../../services/api';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    subcategory: '',
    price: '',
    originalPrice: '',
    description: '',
    ingredients: '',
    howToUse: '',
    images: '',
    badge: '',
    inStock: true
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await productsAPI.getAll();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const openModal = (product = null) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        name: product.name,
        category: product.category,
        subcategory: product.subcategory || '',
        price: product.price,
        originalPrice: product.originalPrice || '',
        description: product.description || '',
        ingredients: product.ingredients || '',
        howToUse: product.howToUse || '',
        images: product.images?.join(', ') || '',
        badge: product.badge || '',
        inStock: product.inStock !== false
      });
    } else {
      setEditingProduct(null);
      setFormData({
        name: '',
        category: '',
        subcategory: '',
        price: '',
        originalPrice: '',
        description: '',
        ingredients: '',
        howToUse: '',
        images: '',
        badge: '',
        inStock: true
      });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingProduct(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      ...formData,
      price: parseFloat(formData.price),
      originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
      images: formData.images.split(',').map(img => img.trim()).filter(Boolean)
    };

    try {
      if (editingProduct) {
        await adminAPI.updateProduct(editingProduct.id, productData);
      } else {
        await adminAPI.createProduct(productData);
      }
      fetchProducts();
      closeModal();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      await adminAPI.deleteProduct(id);
      fetchProducts();
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="admin-spinner"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-page-header">
        <h1>Products</h1>
        <p>Manage your product catalog</p>
      </div>

      <div className="admin-card">
        <div className="admin-card__header">
          <h2 className="admin-card__title">All Products ({products.length})</h2>
          <button className="admin-btn admin-btn-primary" onClick={() => openModal()}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add Product
          </button>
        </div>

        {error && <p style={{ color: '#ef4444', padding: '1rem' }}>{error}</p>}

        {products.length > 0 ? (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <img
                        src={product.images?.[0] || 'https://via.placeholder.com/40'}
                        alt={product.name}
                        style={{ width: 40, height: 40, borderRadius: 8, objectFit: 'cover' }}
                      />
                      <div>
                        <div style={{ fontWeight: 500 }}>{product.name}</div>
                        {product.badge && (
                          <span className={`status-badge ${product.badge}`}>{product.badge}</span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td>{product.category}</td>
                  <td>
                    <div>${product.price?.toFixed(2)}</div>
                    {product.originalPrice && (
                      <small style={{ color: '#9ca3af', textDecoration: 'line-through' }}>
                        ${product.originalPrice?.toFixed(2)}
                      </small>
                    )}
                  </td>
                  <td>
                    <span className={`status-badge ${product.inStock ? 'delivered' : 'cancelled'}`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </td>
                  <td>
                    <div className="admin-actions">
                      <button
                        className="admin-btn admin-btn-secondary admin-btn-sm"
                        onClick={() => openModal(product)}
                      >
                        Edit
                      </button>
                      <button
                        className="admin-btn admin-btn-danger admin-btn-sm"
                        onClick={() => handleDelete(product.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="admin-empty">
            <p>No products found</p>
          </div>
        )}
      </div>

      {/* Product Modal */}
      {showModal && (
        <div className="admin-modal-overlay" onClick={closeModal}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal__header">
              <h3 className="admin-modal__title">
                {editingProduct ? 'Edit Product' : 'Add New Product'}
              </h3>
              <button className="admin-modal__close" onClick={closeModal}>&times;</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="admin-modal__body">
                <div className="admin-grid">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="admin-form-input"
                      required
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Category *</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="admin-form-select"
                      required
                    >
                      <option value="">Select category</option>
                      <option value="skincare">Skincare</option>
                      <option value="haircare">Haircare</option>
                      <option value="bodycare">Bodycare</option>
                      <option value="fragrance">Fragrance</option>
                      <option value="makeup">Makeup</option>
                    </select>
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Price *</label>
                    <input
                      type="number"
                      step="0.01"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="admin-form-input"
                      required
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Original Price</label>
                    <input
                      type="number"
                      step="0.01"
                      name="originalPrice"
                      value={formData.originalPrice}
                      onChange={handleInputChange}
                      className="admin-form-input"
                    />
                  </div>
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="admin-form-textarea"
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Image URLs (comma-separated)</label>
                  <input
                    type="text"
                    name="images"
                    value={formData.images}
                    onChange={handleInputChange}
                    className="admin-form-input"
                    placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
                  />
                </div>

                <div className="admin-grid">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Badge</label>
                    <select
                      name="badge"
                      value={formData.badge}
                      onChange={handleInputChange}
                      className="admin-form-select"
                    >
                      <option value="">None</option>
                      <option value="bestseller">Bestseller</option>
                      <option value="new">New</option>
                      <option value="sale">Sale</option>
                    </select>
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <input
                        type="checkbox"
                        name="inStock"
                        checked={formData.inStock}
                        onChange={handleInputChange}
                      />
                      In Stock
                    </label>
                  </div>
                </div>
              </div>
              <div className="admin-modal__footer">
                <button type="button" className="admin-btn admin-btn-secondary" onClick={closeModal}>
                  Cancel
                </button>
                <button type="submit" className="admin-btn admin-btn-primary">
                  {editingProduct ? 'Update Product' : 'Create Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;

