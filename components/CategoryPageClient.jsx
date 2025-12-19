'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import ScrollAnimations from './ScrollAnimations'
import productsData from '../data/products.json'

export default function CategoryPageClient({ categorySlug }) {
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedSubcategory, setSelectedSubcategory] = useState('all')
  const [selectedPriceRange, setSelectedPriceRange] = useState('all')
  const [selectedTags, setSelectedTags] = useState([])
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  // Get category products
  const categoryProducts = productsData.filter(
    (product) => product.category === categorySlug
  )

  // Get unique subcategories and tags
  const subcategories = [...new Set(categoryProducts.map((p) => p.subcategory))]
  const allTags = [...new Set(categoryProducts.flatMap((p) => p.tags))]

  // Apply filters
  useEffect(() => {
    let filtered = [...categoryProducts]

    // Filter by subcategory
    if (selectedSubcategory !== 'all') {
      filtered = filtered.filter((p) => p.subcategory === selectedSubcategory)
    }

    // Filter by price
    if (selectedPriceRange !== 'all') {
      const [min, max] = selectedPriceRange.split('-').map(Number)
      if (max) {
        filtered = filtered.filter((p) => p.price >= min && p.price <= max)
      } else {
        filtered = filtered.filter((p) => p.price >= min)
      }
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((p) =>
        selectedTags.some((tag) => p.tags.includes(tag))
      )
    }

    setFilteredProducts(filtered)
  }, [selectedSubcategory, selectedPriceRange, selectedTags])

  const handleTagToggle = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const clearFilters = () => {
    setSelectedSubcategory('all')
    setSelectedPriceRange('all')
    setSelectedTags([])
  }

  const categoryTitle = categorySlug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')

  return (
    <>
      <ScrollAnimations />
      
      {/* Header */}
      <div className="pt-32 pb-16 bg-light">
        <div className="container-custom">
          {/* Breadcrumb */}
          <div className="breadcrumb mb-6">
            <Link href="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span>{categoryTitle}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-philosopher mb-4 animate-on-scroll">
            {categoryTitle}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl animate-on-scroll">
            Explore our curated collection of {categoryTitle.toLowerCase()}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-32">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-philosopher text-2xl">Filters</h3>
                  {(selectedSubcategory !== 'all' ||
                    selectedPriceRange !== 'all' ||
                    selectedTags.length > 0) && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-primary hover:underline"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {/* Subcategory Filter */}
                {subcategories.length > 0 && (
                  <div className="filter-section">
                    <h4 className="filter-title">Subcategory</h4>
                    <div className="space-y-2">
                      <label className="filter-option">
                        <input
                          type="radio"
                          name="subcategory"
                          checked={selectedSubcategory === 'all'}
                          onChange={() => setSelectedSubcategory('all')}
                          className="sr-only"
                        />
                        <div
                          className={`filter-checkbox ${
                            selectedSubcategory === 'all' ? 'checked' : ''
                          }`}
                        />
                        <span>All</span>
                      </label>
                      {subcategories.map((sub) => (
                        <label key={sub} className="filter-option">
                          <input
                            type="radio"
                            name="subcategory"
                            checked={selectedSubcategory === sub}
                            onChange={() => setSelectedSubcategory(sub)}
                            className="sr-only"
                          />
                          <div
                            className={`filter-checkbox ${
                              selectedSubcategory === sub ? 'checked' : ''
                            }`}
                          />
                          <span className="capitalize">{sub}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Price Filter */}
                <div className="filter-section">
                  <h4 className="filter-title">Price Range</h4>
                  <div className="space-y-2">
                    {[
                      { label: 'All', value: 'all' },
                      { label: 'Under ₹1,000', value: '0-1000' },
                      { label: '₹1,000 - ₹2,500', value: '1000-2500' },
                      { label: '₹2,500 - ₹5,000', value: '2500-5000' },
                      { label: 'Above ₹5,000', value: '5000-999999' },
                    ].map((range) => (
                      <label key={range.value} className="filter-option">
                        <input
                          type="radio"
                          name="price"
                          checked={selectedPriceRange === range.value}
                          onChange={() => setSelectedPriceRange(range.value)}
                          className="sr-only"
                        />
                        <div
                          className={`filter-checkbox ${
                            selectedPriceRange === range.value ? 'checked' : ''
                          }`}
                        />
                        <span>{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Tags Filter */}
                {allTags.length > 0 && (
                  <div className="filter-section">
                    <h4 className="filter-title">Tags</h4>
                    <div className="space-y-2">
                      {allTags.map((tag) => (
                        <label key={tag} className="filter-option">
                          <input
                            type="checkbox"
                            checked={selectedTags.includes(tag)}
                            onChange={() => handleTagToggle(tag)}
                            className="sr-only"
                          />
                          <div
                            className={`filter-checkbox ${
                              selectedTags.includes(tag) ? 'checked' : ''
                            }`}
                          />
                          <span className="capitalize">{tag}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>

            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                className="btn-secondary w-full flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                Filters ({filteredProducts.length} products)
              </button>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <div className="product-grid">
                  {filteredProducts.map((product, index) => (
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
                        <p className="product-category">
                          {product.subcategory}
                        </p>
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">
                          ₹{product.price.toLocaleString()}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-gray-600 mb-4">
                    No products found with the selected filters
                  </p>
                  <button onClick={clearFilters} className="btn-primary">
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}