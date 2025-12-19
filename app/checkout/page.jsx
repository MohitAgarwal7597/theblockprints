'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import ScrollAnimations from '../../components/ScrollAnimations'

export default function CheckoutPage() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    if (cart.length === 0) {
      router.push('/cart')
      return
    }
    setCartItems(cart)
    setIsLoading(false)
  }, [router])

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const generateWhatsAppMessage = () => {
    let message = `*New Order Request*%0A%0A`
    message += `*Order Details:*%0A`
    message += `--------------------%0A%0A`

    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*%0A`
      message += `   Quantity: ${item.quantity}%0A`
      message += `   Price: ₹${item.price.toLocaleString()}%0A`
      message += `   Subtotal: ₹${(item.price * item.quantity).toLocaleString()}%0A%0A`
    })

    message += `--------------------%0A`
    message += `*Total Amount: ₹${subtotal.toLocaleString()}*%0A%0A`
    message += `Please confirm this order and provide delivery details.`

    return message
  }

  const generateEmailBody = () => {
    let body = `New Order Request\n\n`
    body += `Order Details:\n`
    body += `--------------------\n\n`

    cartItems.forEach((item, index) => {
      body += `${index + 1}. ${item.name}\n`
      body += `   Quantity: ${item.quantity}\n`
      body += `   Price: ₹${item.price.toLocaleString()}\n`
      body += `   Subtotal: ₹${(item.price * item.quantity).toLocaleString()}\n\n`
    })

    body += `--------------------\n`
    body += `Total Amount: ₹${subtotal.toLocaleString()}\n\n`
    body += `Please confirm this order and provide delivery details.`

    return encodeURIComponent(body)
  }

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/919314521343?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const handleEmailOrder = () => {
    const subject = encodeURIComponent('New Order Request')
    const body = generateEmailBody()
    const mailtoUrl = `mailto:theblockprintsjpr@gmail.com?subject=${subject}&body=${body}`
    window.location.href = mailtoUrl
  }

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
            <Link href="/cart" className="breadcrumb-link">Cart</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Checkout</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-philosopher mb-4 animate-on-scroll">
            Checkout
          </h1>
          <p className="text-lg text-gray-600 animate-on-scroll">
            Review your order and complete the purchase
          </p>
        </div>
      </div>

      {/* Checkout Content */}
      <div className="section-padding">
        <div className="container-custom max-w-4xl">
          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-on-scroll">
            <h2 className="text-2xl font-philosopher mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 pb-4 border-b">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">
                      Qty: {item.quantity} × ₹{item.price.toLocaleString()}
                    </p>
                  </div>
                  <p className="font-semibold">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between text-xl font-philosopher">
                <span>Total Amount</span>
                <span className="text-primary font-bold">
                  ₹{subtotal.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Checkout Options */}
          <div className="bg-light rounded-lg p-8 animate-on-scroll">
            <h2 className="text-2xl font-philosopher mb-4">
              Complete Your Order
            </h2>
            <p className="text-gray-600 mb-6">
              Choose your preferred method to send us your order details. We'll contact you to confirm and arrange delivery.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* WhatsApp Option */}
              <div className="bg-white rounded-lg p-6 border-2 border-green-500 relative">
                <div className="absolute -top-3 left-4 bg-green-500 text-white px-3 py-1 text-sm font-semibold rounded">
                  RECOMMENDED
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-philosopher text-lg font-semibold">
                      WhatsApp
                    </h3>
                    <p className="text-sm text-gray-600">Instant confirmation</p>
                  </div>
                </div>
                <button
                  onClick={handleWhatsAppOrder}
                  className="btn-primary w-full"
                >
                  Send Order via WhatsApp
                </button>
              </div>

              {/* Email Option */}
              <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center text-white">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-philosopher text-lg font-semibold">Email</h3>
                    <p className="text-sm text-gray-600">Traditional method</p>
                  </div>
                </div>
                <button
                  onClick={handleEmailOrder}
                  className="btn-secondary w-full"
                >
                  Send Order via Email
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                What happens next?
              </h3>
              <ul className="text-sm text-gray-700 space-y-2 ml-7">
                <li>• We'll receive your order details instantly</li>
                <li>• Our team will contact you to confirm</li>
                <li>• Delivery information and payment options will be discussed</li>
                <li>• Your order will be processed immediately upon confirmation</li>
              </ul>
            </div>
          </div>

          {/* Back to Cart */}
          <div className="text-center mt-8">
            <Link href="/cart" className="text-gray-600 hover:text-primary transition-colors">
              ← Back to Cart
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
