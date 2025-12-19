'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import HeroCarousel from '../components/HeroCarousel'
import VideoCards from '../components/VideoCards'
import FirstVisitPopup from '../components/FirstVisitPopup'
import ScrollAnimations from '../components/ScrollAnimations'
import productsData from '../data/products.json'

export default function Home() {
  const featuredProducts = productsData.filter((product) => product.featured)

  return (
    <>
      <ScrollAnimations />
      <FirstVisitPopup />
      
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-philosopher mb-4">
              Featured Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked designs that showcase the best of our craftsmanship
            </p>
          </div>

          <div className="product-grid">
            {featuredProducts.map((product, index) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className={`product-card animate-on-scroll stagger-${(index % 5) + 1}`}
              >
                <div className="product-image-wrapper">
                  {product.featured && (
                    <div className="product-badge">Featured</div>
                  )}
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="product-image"
                    loading="lazy"
                  />
                </div>
                <div className="product-info">
                  <p className="product-category">{product.category.replace(/-/g, ' ')}</p>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">₹{product.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Link href="/category/saree" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Video Cards */}
      <VideoCards />

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-philosopher mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quality, tradition, and service that sets us apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Premium Quality',
                description: 'Handpicked fabrics and meticulous quality control',
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                ),
                title: 'Custom Printing',
                description: 'Bring your designs to life on premium fabrics',
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Fast Delivery',
                description: 'Quick processing and reliable shipping',
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: 'Customer Care',
                description: '24/7 support for all your queries',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`text-center p-6 animate-on-scroll stagger-${index + 1}`}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-philosopher text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-philosopher mb-6">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get in touch with us for custom printing services or browse our ready-to-wear collection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919314521343"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Contact Us on WhatsApp
              </a>
              {/* <Link href="/category/saree" className="btn-secondary text-white">
                Browse Collection
              </Link> */}
              <Link
  href="/category/saree"
  className="btn-secondary"
  style={{ color: '#ffffff' }}
>
  Browse Collection
</Link>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
