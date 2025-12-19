'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  const slides = [
    {
      id: 1,
      type: 'custom',
      title: 'Custom Printing Service',
      subtitle: 'Transform Your Vision into Reality',
      description: 'Get your designs printed on premium fabrics. Professional quality, fast turnaround.',
      cta: 'Contact Us Now',
      ctaLink: 'https://wa.me/919024891333',
      image: isMobile ? 'images/hero/mhero_1.png' : '/images/hero/hero_3.png' ,
    },
    {
      id: 2,
      type: 'category',
      title: 'Exquisite Sarees',
      subtitle: 'Elegance Woven in Every Thread',
      description: 'Discover our collection of handcrafted sarees in silk, cotton, and georgette.',
      cta: 'Shop Now',
      ctaLink: '/category/saree',
      image:isMobile ? 'images/hero/mhero_2.png' : '/images/hero/hero_9.png',
    },
    {
      id: 3,
      type: 'category',
      title: 'Beautiful Dupattas',
      subtitle: 'Complete Your Look',
      description: 'Elegant dupattas in chiffon, silk, and cotton with intricate designs.',
      cta: 'Shop Now',
      ctaLink: '/category/dupatta',
      image:isMobile ? 'images/hero/mhero_3.png' : '/images/hero/hero_8.png',
    },
    {
      id: 4,
      type: 'category',
      title: 'Plain Greige Fabric',
      subtitle: 'Premium Quality Fabric',
      description: 'Wholesale plain greige fabric for custom printing and bulk orders.',
      cta: 'Shop Now',
      ctaLink: '/category/plain-greige-fabric',
      image: '/images/hero/hero_6.png',
    },
    {
      id: 5,
      type: 'category',
      title: 'Dress Material',
      subtitle: 'Stitch Your Style',
      description: 'Complete dress material sets with top, bottom, and dupatta.',
      cta: 'Shop Now',
      ctaLink: '/category/dress-material',
      image: '/images/hero/hero_4.png',
    },
    {
      id: 6,
      type: 'category',
      title: 'Unstitched Suits',
      subtitle: 'Create Your Perfect Outfit',
      description: 'Premium unstitched suit sets for your custom tailoring.',
      cta: 'Shop Now',
      ctaLink: '/category/unstitched-suit',
      image: '/images/hero/hero_7.png',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="hero-carousel relative">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="carousel-image-overlay" />
          </div>

          {/* Content */}
          <div className="carousel-content">
            <h1 className="hero-title text-5xl md:text-7xl font-philosopher mb-4">
              {slide.title}
            </h1>
            <p className="hero-subtitle text-2xl md:text-3xl font-light mb-6">
              {slide.subtitle}
            </p>
            <p className="hero-cta text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {slide.description}
            </p>
            {slide.type === 'custom' ? (
              <a
                href={slide.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                {slide.cta}
              </a>
            ) : (
              <Link href={slide.ctaLink} className="btn-primary inline-block">
                {slide.cta}
              </Link>
            )}
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroCarousel
