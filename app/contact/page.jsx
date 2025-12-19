'use client'

import ScrollAnimations from '../../components/ScrollAnimations'

export default function ContactPage() {
  const contactMethods = [
    {
      title: 'WhatsApp',
      description: 'Get instant responses to your queries',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      link: 'https://wa.me/919024891333',
      linkText: '+91 90248 91333',
      action: 'Chat Now',
      color: 'bg-green-500',
    },
    {
      title: 'Phone',
      description: 'Call us for immediate assistance',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      link: 'tel:+919024891333',
      linkText: '+91 90248 91333',
      action: 'Call Now',
      color: 'bg-blue-500',
    },
    {
      title: 'Email',
      description: 'Send us a detailed message',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: 'mailto:theblockprintsjpr@gmail.com',
      linkText: 'theblockprintsjpr@gmail.com',
      action: 'Send Email',
      color: 'bg-red-500',
    },
    {
      title: 'Instagram',
      description: 'Follow us and send a DM',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      link: 'https://instagram.com/theblockprintsjpr',
      linkText: '@theblockprintsjpr',
      action: 'Follow Us',
      color: 'bg-gradient-to-br from-purple-600 to-pink-500',
    },
    {
      title: 'Facebook',
      description: 'Connect with us on Facebook',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      link: 'https://facebook.com/theblockprintsjpr',
      linkText: 'theblockprintsjpr',
      action: 'Visit Page',
      color: 'bg-blue-600',
    },
  ]

  return (
    <>
      <ScrollAnimations />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-7xl font-philosopher mb-6 animate-on-scroll">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto animate-on-scroll">
            We're here to help! Reach out through your preferred method
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all card-animate animate-on-scroll stagger-${(index % 3) + 1}`}
              >
                <div className={`${method.color} text-white w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  {method.icon}
                </div>
                <h3 className="font-philosopher text-2xl mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="text-dark font-semibold mb-4 break-all">
                  {method.linkText}
                </p>
                <span className="text-primary font-semibold hover:underline">
                  {method.action} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours & Location */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Business Hours */}
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-philosopher mb-6">Business Hours</h2>
              <div className="space-y-4">
                {[
                  { days: 'Monday - Saturday', hours: '10:00 AM - 7:00 PM' },
                  { days: 'Sunday', hours: '10:00 AM - 5:00 PM' },
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-4 border-b border-gray-300">
                    <span className="font-semibold">{schedule.days}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-600">
                We respond to WhatsApp messages and emails outside business hours as well!
              </p>
            </div>

            {/* Location */}
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-philosopher mb-6">Location</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3 mb-4">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold mb-2">The Block Prints</p>
                    <p className="text-gray-600">
                      Jaipur, Rajasthan<br />
                      India
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Exact location shared upon order confirmation for pickup or visit by appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-philosopher mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to questions you might have
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Do you ship nationwide?',
                a: 'Yes, we ship across India. Shipping costs and delivery times vary by location. Contact us for specific details.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept bank transfers, UPI, and cash on delivery (for select locations). Payment details will be shared after order confirmation.',
              },
              {
                q: 'Can I get a sample before ordering in bulk?',
                a: 'Yes! For custom printing orders, we provide samples for approval before starting full production.',
              },
              {
                q: 'What is your return policy?',
                a: 'We accept returns within 7 days of delivery for defective or damaged products. Custom-printed items cannot be returned unless defective.',
              },
              {
                q: 'How long does custom printing take?',
                a: 'Custom printing typically takes 7-14 days depending on the quantity and complexity. We\'ll provide an accurate timeline when you place your order.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-md animate-on-scroll stagger-${(index % 5) + 1}`}
              >
                <h3 className="font-philosopher text-xl mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
            <a
              href="https://wa.me/919024891333"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Ask Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-philosopher mb-6">
              Let's Start a Conversation
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you have a question, need a quote, or want to explore our collection, we're just a message away
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919024891333"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Chat on WhatsApp
              </a>
              <a href="tel:+919024891333" className="btn-secondary">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
