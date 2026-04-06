import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  const shipping = cartTotal >= 50 ? 0 : 5.99;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="container">
          <div className="cart-empty__content">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
              <path d="M3 6h18"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <h1>Your Cart is Empty</h1>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <Link to="/shop" className="btn btn-primary">Start Shopping</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="container">
        <div className="cart__header">
          <h1>Shopping Cart</h1>
          <span>{cart.length} {cart.length === 1 ? 'item' : 'items'}</span>
        </div>

        <div className="cart__layout">
          <div className="cart__items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <Link to={`/product/${item.id}`} className="cart-item__image">
                  <img src={item.images[0]} alt={item.name} />
                </Link>
                <div className="cart-item__details">
                  <div className="cart-item__info">
                    <Link to={`/product/${item.id}`}>
                      <h3>{item.name}</h3>
                    </Link>
                    <p className="cart-item__category">{item.category}</p>
                    <p className="cart-item__price">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="cart-item__actions">
                    <div className="quantity-selector">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        +
                      </button>
                    </div>
                    <button
                      className="cart-item__remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart-item__total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="cart__summary">
            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="summary-row">
              <span>Estimated Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            {cartTotal < 50 && (
              <div className="shipping-notice">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="16" x2="12" y2="12"/>
                  <line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
                <span>Add ${(50 - cartTotal).toFixed(2)} more for free shipping!</span>
              </div>
            )}

            <div className="summary-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <Link to="/checkout" className="btn btn-primary btn-lg">
              Proceed to Checkout
            </Link>

            <div className="cart__continue">
              <Link to="/shop">← Continue Shopping</Link>
            </div>

            <div className="cart__secure">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span>Secure checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

