'use client'

import Link from 'next/link'
import ScrollAnimations from '../../components/ScrollAnimations'

export default function AboutPage() {
  return (
    <>
      <ScrollAnimations />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-7xl font-philosopher mb-6 animate-on-scroll">
            About The Block Prints
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto animate-on-scroll">
            Weaving tradition with innovation to create beautiful textiles
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl font-philosopher mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  The Block Prints was born from a passion for preserving traditional textile craftsmanship while embracing modern design aesthetics. Based in Jaipur, the heart of India's textile heritage, we've been creating beautiful fabrics that tell stories.
                </p>
                <p>
                  Our journey began with a simple vision: to make authentic, high-quality textiles accessible to everyone while supporting traditional artisans and their centuries-old techniques.
                </p>
                <p>
                  Today, we're proud to offer a diverse collection of sarees, dupattas, dress materials, and custom printing services that blend heritage craftsmanship with contemporary design.
                </p>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/images/about/story.jpg"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-philosopher mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'We never compromise on the quality of our fabrics, prints, or craftsmanship. Every piece is carefully inspected to meet our high standards.',
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Tradition Meets Innovation',
                description: 'We honor traditional techniques while incorporating modern designs and technology to create timeless pieces for today\'s world.',
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: 'Customer Satisfaction',
                description: 'Your happiness is our success. We provide personalized service and support to ensure you find exactly what you need.',
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
              {
                title: 'Sustainability',
                description: 'We use eco-friendly materials and processes wherever possible, caring for both our customers and the environment.',
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Artisan Support',
                description: 'We work directly with skilled artisans, ensuring fair wages and helping preserve traditional crafts for future generations.',
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: 'Transparency',
                description: 'We believe in honest communication about our products, processes, and pricing. No hidden costs, just clear information.',
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-lg shadow-lg animate-on-scroll stagger-${(index % 3) + 1}`}
              >
                <div className="text-primary mb-4">{value.icon}</div>
                <h3 className="font-philosopher text-2xl mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-philosopher mb-4">
              What We Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Sarees',
                description: 'Elegant sarees in silk, cotton, georgette, and more. From traditional to contemporary designs.',
                link: '/category/saree',
              },
              {
                title: 'Dupattas',
                description: 'Beautiful dupattas in various fabrics to complement your outfits perfectly.',
                link: '/category/dupatta',
              },
              {
                title: 'Dress Material',
                description: 'Complete dress material sets ready for stitching to your measurements.',
                link: '/category/dress-material',
              },
              {
                title: 'Unstitched Suits',
                description: 'Premium unstitched suit sets for custom tailoring.',
                link: '/category/unstitched-suit',
              },
              {
                title: 'Plain Greige Fabric',
                description: 'High-quality plain fabric for bulk orders and custom printing.',
                link: '/category/plain-greige-fabric',
              },
              {
                title: 'Custom Printing',
                description: 'Professional custom printing services for your unique designs.',
                link: '/custom-design',
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all card-animate animate-on-scroll stagger-${(index % 3) + 1}`}
              >
                <h3 className="font-philosopher text-2xl mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <span className="text-primary font-semibold hover:underline">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-philosopher mb-6">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you're looking for ready-made designs or want something custom, we're here to help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/category/saree" className="btn-primary">
                Shop Collection
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
