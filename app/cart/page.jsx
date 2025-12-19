'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import ScrollAnimations from '../../components/ScrollAnimations'

export default function CartPage() {
  const [cartItems, setCartItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartItems(cart)
    setIsLoading(false)
  }, [])

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return

    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    )
    setCartItems(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId)
    setCartItems(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const clearCart = () => {
    setCartItems([])
    localStorage.removeItem('cart')
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner" />
      </div>
    )
  }

  return (
    <>
      <ScrollAnimations />
      
      {/* Header */}
      <div className="pt-32 pb-16 bg-light">
        <div className="container-custom">
          <div className="breadcrumb mb-6">
            <Link href="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Shopping Cart</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-philosopher mb-4 animate-on-scroll">
            Shopping Cart
          </h1>
          <p className="text-lg text-gray-600 animate-on-scroll">
            {cartItems.length === 0
              ? 'Your cart is empty'
              : `${cartItems.length} item${cartItems.length !== 1 ? 's' : ''} in your cart`}
          </p>
        </div>
      </div>

      {/* Cart Content */}
      <div className="section-padding">
        <div className="container-custom">
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <svg
                className="w-24 h-24 mx-auto mb-6 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <h2 className="text-2xl font-philosopher mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">
                Start shopping to add items to your cart
              </p>
              <Link href="/" className="btn-primary">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-philosopher">Cart Items</h2>
                  <button
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-700 font-medium"
                  >
                    Clear Cart
                  </button>
                </div>

                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-image"
                      />
                      <div className="cart-item-details">
                        <Link
                          href={`/product/${item.slug}`}
                          className="cart-item-name hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                        <p className="cart-item-price">
                          ₹{item.price.toLocaleString()}
                        </p>

                        <div className="quantity-control">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="quantity-btn"
                          >
                            −
                          </button>
                          <span className="font-semibold w-12 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="quantity-btn"
                          >
                            +
                          </button>
                        </div>

                        <p className="text-lg font-semibold mt-4">
                          Total: ₹{(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:text-red-700 ml-auto"
                        aria-label="Remove item"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-light p-8 rounded-lg sticky top-32">
                  <h2 className="text-2xl font-philosopher mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">
                        ₹{subtotal.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Shipping</span>
                      <span className="text-gray-600">
                        Calculated at checkout
                      </span>
                    </div>
                    <div className="border-t pt-4 flex justify-between text-xl font-philosopher">
                      <span>Total</span>
                      <span className="text-primary font-bold">
                        ₹{subtotal.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <Link href="/checkout" className="btn-primary w-full text-center block mb-4">
                    Proceed to Checkout
                  </Link>

                  <Link
                    href="/"
                    className="btn-secondary w-full text-center block"
                  >
                    Continue Shopping
                  </Link>

                  <div className="mt-6 pt-6 border-t">
                    <h3 className="font-semibold mb-3">Need Help?</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Contact us for bulk orders or custom designs
                    </p>
                    <a
                      href="https://wa.me/919314521343"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      Chat on WhatsApp →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
