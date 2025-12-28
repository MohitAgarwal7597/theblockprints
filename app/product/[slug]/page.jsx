'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import ScrollAnimations from '../../../components/ScrollAnimations'
import productsData from '../../../data/products.json'

export default function ProductPage() {
  const params = useParams()
  const productSlug = params.slug

  const product = productsData.find((p) => p.slug === productSlug)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-philosopher mb-4">Product Not Found</h1>
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const addToCart = () => {
    // Get existing cart
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')

    // Check if product already exists
    const existingItemIndex = cart.findIndex((item) => item.id === product.id)

    if (existingItemIndex > -1) {
      // Update quantity
      cart[existingItemIndex].quantity += quantity
    } else {
      // Add new item
      cart.push({
        id: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity: quantity,
      })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    setIsAdded(true)

    setTimeout(() => setIsAdded(false), 2000)
  }

  const categoryTitle = product.category.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')

  // Related products
  const relatedProducts = productsData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <>
      <ScrollAnimations />

      {/* Breadcrumb */}
      <div className="pt-32 pb-8 bg-light">
        <div className="container-custom">
          <div className="breadcrumb">
            <Link href="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link href={`/category/${product.category}`} className="breadcrumb-link">
              {categoryTitle}
            </Link>
            <span className="breadcrumb-separator">/</span>
            <span>{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="animate-on-scroll">
              {/* Main Image */}
              <div className="mb-4 relative overflow-hidden rounded-lg bg-gray-100">
                {product.video && selectedImage === -1 ? (
                  <video
                    src={product.video}
                    controls
                    autoPlay
                    loop
                    muted
                    className="w-full h-auto"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-auto object-cover"
                  />
                )}
              </div>

              {/* Thumbnails */}
              <div className="image-gallery-thumbnails">
                {product.video && (
                  <button
                    onClick={() => setSelectedImage(-1)}
                    className={`gallery-thumbnail ${selectedImage === -1 ? 'active' : ''}`}
                  >
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                )}
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    onClick={() => setSelectedImage(index)}
                    className={`gallery-thumbnail ${selectedImage === index && !product.video ? 'active' : ''
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="animate-on-scroll">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wide">
                  {product.subcategory}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-philosopher mb-4">
                {product.name}
              </h1>

              <div className="mb-6">
                <p className="text-4xl font-philosopher font-bold text-primary">
                  ₹{product.price.toLocaleString()}
                </p>
              </div>

              <p className="text-lg text-gray-600 mb-8">{product.description}</p>

              {/* Tags */}
              {product.tags && product.tags.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-semibold mb-3">Features:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full capitalize"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-8">
                <label className="block font-semibold mb-3">Quantity:</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="quantity-btn"
                  >
                    −
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={addToCart}
                  className="btn-primary flex-1 relative overflow-hidden"
                  disabled={isAdded}
                >
                  {isAdded ? (
                    <>
                      <svg
                        className="w-5 h-5 inline-block mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Added to Cart
                    </>
                  ) : (
                    'Add to Cart'
                  )}
                </button>
                <Link href="/cart" className="btn-secondary flex-1 text-center">
                  View Cart
                </Link>
              </div>

              {/* Stock Status */}
              <div className="mb-8">
                {product.inStock ? (
                  <p className="text-green-600 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    In Stock
                  </p>
                ) : (
                  <p className="text-red-600">Out of Stock</p>
                )}
              </div>

              {/* Contact Options */}
              <div className="border-t pt-8">
                <h3 className="font-philosopher text-xl mb-4">
                  Need Help or Custom Design?
                </h3>
                <p className="text-gray-600 mb-4">
                  Contact us for bulk orders, custom designs, or any queries.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/919314521343"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-center"
                  >
                    WhatsApp Us
                  </a>
                  <a
                    href="tel:+919314521343"
                    className="btn-secondary text-center"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-3xl md:text-4xl font-philosopher mb-8 animate-on-scroll">
                You May Also Like
              </h2>
              <div className="product-grid">
                {relatedProducts.map((relatedProduct, index) => (
                  <Link
                    key={relatedProduct.id}
                    href={`/product/${relatedProduct.slug}`}
                    className={`product-card animate-on-scroll stagger-${(index % 4) + 1}`}
                  >
                    <div className="product-image-wrapper">
                      <img
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        className="product-image"
                        loading="lazy"
                      />
                    </div>
                    <div className="product-info">
                      <p className="product-category">
                        {relatedProduct.subcategory}
                      </p>
                      <h3 className="product-name">{relatedProduct.name}</h3>
                      <p className="product-price">
                        ₹{relatedProduct.price.toLocaleString()}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
