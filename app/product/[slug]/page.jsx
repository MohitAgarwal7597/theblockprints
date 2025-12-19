import ProductPageClient from '../../../components/ProductPageClient'
import productsData from '../../../data/products.json'

// This function is required for static export with dynamic routes
export function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }))
}

export default function ProductPage({ params }) {
  const { slug } = params
  const product = productsData.find((p) => p.slug === slug)

  return <ProductPageClient product={product} />
}
