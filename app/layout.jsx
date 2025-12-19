import '../styles/globals.css'
import '../styles/animations.css'
import '../styles/components.css'
import Navigation from '../components/Navigation'
import FloatingContact from '../components/FloatingContact'
import Footer from '../components/Footer'

export const metadata = {
  title: 'The Block Prints - Premium Textile E-commerce',
  description: 'Discover beautiful handcrafted textiles, sarees, dupattas, and custom printing services. Premium quality fabrics and traditional designs.',
  keywords: 'textiles, sarees, dupattas, handblock printing, custom printing, dress material, unstitched suits',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  )
}
