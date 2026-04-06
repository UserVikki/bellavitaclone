import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  });

  const shipping = cartTotal >= 50 ? 0 : 5.99;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (step === 1) {
      setStep(2);
    } else {
      setIsProcessing(true);
      // Simulate payment processing
      setTimeout(() => {
        setIsProcessing(false);
        setOrderComplete(true);
        clearCart();
      }, 2000);
    }
  };

  if (cart.length === 0 && !orderComplete) {
    return (
      <div className="checkout-empty">
        <div className="container">
          <h1>Your cart is empty</h1>
          <p>Add some products before checking out.</p>
          <Link to="/shop" className="btn btn-primary">Shop Now</Link>
        </div>
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="checkout-success">
        <div className="container">
          <div className="success-content">
            <div className="success-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h1>Thank You for Your Order!</h1>
            <p className="order-number">Order #LB{Date.now().toString().slice(-8)}</p>
            <p>We've sent a confirmation email with order details. Your items will be shipped within 2-3 business days.</p>
            <Link to="/shop" className="btn btn-primary">Continue Shopping</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout">
      <div className="container">
        <div className="checkout__header">
          <Link to="/" className="checkout__logo">Luxe Botanica</Link>
        </div>

        <div className="checkout__steps">
          <div className={`step ${step >= 1 ? 'active' : ''}`}>
            <span className="step-number">1</span>
            <span className="step-label">Shipping</span>
          </div>
          <div className="step-line"></div>
          <div className={`step ${step >= 2 ? 'active' : ''}`}>
            <span className="step-number">2</span>
            <span className="step-label">Payment</span>
          </div>
        </div>

        <div className="checkout__layout">
          <form className="checkout__form" onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="checkout__section">
                <h2>Shipping Information</h2>

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="Street address"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Apartment, suite, etc. (optional)</label>
                  <input
                    type="text"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-row form-row--3">
                  <div className="form-group">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">ZIP Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="For delivery updates"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg checkout__submit">
                  Continue to Payment
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="checkout__section">
                <button
                  type="button"
                  className="back-btn"
                  onClick={() => setStep(1)}
                >
                  ← Back to Shipping
                </button>

                <h2>Payment Information</h2>

                <div className="payment-methods">
                  <label className="payment-method active">
                    <input type="radio" name="payment" defaultChecked />
                    <span className="payment-method__label">Credit Card</span>
                  </label>
                </div>

                <div className="form-group">
                  <label className="form-label">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Name on Card</label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Expiry Date</label>
                    <input
                      type="text"
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="MM/YY"
                      maxLength="5"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="123"
                      maxLength="4"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg checkout__submit"
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
                </button>

                <p className="checkout__secure">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  Your payment information is secure and encrypted
                </p>
              </div>
            )}
          </form>

          <div className="checkout__summary">
            <h3>Order Summary</h3>

            <div className="summary-items">
              {cart.map((item) => (
                <div key={item.id} className="summary-item">
                  <div className="summary-item__image">
                    <img src={item.images[0]} alt={item.name} />
                    <span className="quantity">{item.quantity}</span>
                  </div>
                  <div className="summary-item__info">
                    <h4>{item.name}</h4>
                    <p>{item.category}</p>
                  </div>
                  <span className="summary-item__price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="summary-totals">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="summary-row">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

