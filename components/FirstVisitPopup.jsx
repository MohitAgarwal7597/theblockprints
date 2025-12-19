'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const FirstVisitPopup = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisitedBefore')
    
    if (!hasVisited) {
      // Show popup after 1 second delay
      setTimeout(() => {
        setIsOpen(true)
      }, 1000)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('hasVisitedBefore', 'true')
  }

  const handleShopNow = () => {
    handleClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay animate-fade-in" onClick={handleClose}>
      <div
        className="modal-content animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="modal-close"
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Side */}
          <div className="hidden md:block relative h-full min-h-[500px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(/images/hero/hero_3.png)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
            </div>
          </div>

          {/* Content Side */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-1 bg-primary text-white text-sm font-semibold uppercase tracking-wide mb-4">
                Welcome
              </span>
              <h2 className="text-4xl font-philosopher font-bold mb-4">
                Custom Printing Service
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Transform your designs into reality on premium fabrics. We offer professional custom printing services with:
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
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
                  <span className="text-gray-700">High-quality fabric printing</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
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
                  <span className="text-gray-700">Custom designs & bulk orders</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
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
                  <span className="text-gray-700">Fast turnaround time</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
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
                  <span className="text-gray-700">Professional consultation</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919024891333"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="btn-primary text-center"
              >
                Contact Us
              </a>
              <Link
                href="/category/saree"
                onClick={handleShopNow}
                className="btn-secondary text-center"
              >
                Shop Now
              </Link>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Or explore our ready-to-wear collection
            </p>
          </div>

          {/* Mobile Image */}
          <div className="md:hidden relative h-64">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(/images/popup/custom-printing.jpg)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstVisitPopup
