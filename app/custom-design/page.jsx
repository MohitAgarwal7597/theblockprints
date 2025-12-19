'use client'

import Link from 'next/link'
import ScrollAnimations from '../../components/ScrollAnimations'

export default function CustomDesignPage() {
  const services = [
    {
      title: 'Block Printing',
      description: 'Traditional handblock printing on premium fabrics with your custom designs.',
      features: [
        'Custom block creation',
        'Multiple color options',
        'Traditional techniques',
        'Bulk orders available',
      ],
    },
    {
      title: 'Digital Printing',
      description: 'High-resolution digital printing for intricate and colorful designs.',
      features: [
        'Photo-quality prints',
        'Unlimited colors',
        'Fast turnaround',
        'Small batch friendly',
      ],
    },
    {
      title: 'Screen Printing',
      description: 'Durable screen printing perfect for bulk orders and commercial use.',
      features: [
        'Long-lasting prints',
        'Cost-effective for bulk',
        'Vibrant colors',
        'Professional quality',
      ],
    },
    {
      title: 'Custom Embroidery',
      description: 'Elegant embroidery work to add texture and luxury to your fabrics.',
      features: [
        'Hand & machine embroidery',
        'Thread customization',
        'Pattern design',
        'Premium finishing',
      ],
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Share Your Design',
      description: 'Send us your design ideas, sketches, or reference images via WhatsApp or email.',
    },
    {
      step: '02',
      title: 'Consultation',
      description: 'Our experts will discuss fabric options, printing techniques, and provide a quote.',
    },
    {
      step: '03',
      title: 'Sample Approval',
      description: 'We create a sample for your approval before starting the full production.',
    },
    {
      step: '04',
      title: 'Production',
      description: 'Once approved, we begin production with quality checks at every stage.',
    },
    {
      step: '05',
      title: 'Delivery',
      description: 'Your custom-designed fabrics are carefully packaged and delivered to you.',
    },
  ]

  return (
    <>
      <ScrollAnimations />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-philosopher mb-6 animate-on-scroll">
              Custom Design Service
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-on-scroll">
              Transform your creative vision into reality with our professional printing services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
              <a
                href="https://wa.me/919314521343"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get Started on WhatsApp
              </a>
              <a href="mailto:theblockprintsjpr@gmail.com" className="btn-secondary">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-philosopher mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our range of professional printing and customization services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-on-scroll stagger-${(index % 4) + 1}`}
              >
                <h3 className="font-philosopher text-2xl mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-philosopher mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our simple 5-step process to bring your designs to life
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <div
                key={index}
                className={`flex gap-6 mb-12 last:mb-0 animate-on-scroll stagger-${index + 1}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-philosopher text-xl font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-philosopher text-2xl mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-philosopher mb-4">
              Our Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Examples of custom designs we've created for our clients
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div
                key={index}
                className={`aspect-square bg-gray-200 rounded-lg overflow-hidden animate-on-scroll stagger-${(index % 5) + 1}`}
              >
                <img
                  src={`/images/gallery/custom-${index}.jpg`}
                  alt={`Custom design ${index}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-philosopher mb-4">
              Why Choose Our Custom Service
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Expert Craftsmanship',
                description: 'Years of experience in traditional and modern printing techniques',
                icon: '🎨',
              },
              {
                title: 'Quality Materials',
                description: 'Premium fabrics and eco-friendly inks for lasting results',
                icon: '✨',
              },
              {
                title: 'Fast Turnaround',
                description: 'Efficient production without compromising on quality',
                icon: '⚡',
              },
              {
                title: 'Competitive Pricing',
                description: 'Fair prices for both small and bulk orders',
                icon: '💰',
              },
              {
                title: 'Personal Consultation',
                description: 'Dedicated support throughout the entire process',
                icon: '🤝',
              },
              {
                title: 'Satisfaction Guarantee',
                description: 'We ensure you love the final product',
                icon: '✅',
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center animate-on-scroll stagger-${(index % 3) + 1}`}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-philosopher text-xl mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12 text-center animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-philosopher mb-6">
              Ready to Start Your Custom Project?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your design ideas and get a custom quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919314521343"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                WhatsApp: +91 93145 21343
              </a>
              <a
                href="https://instagram.com/theblockprintsjpr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                DM on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
