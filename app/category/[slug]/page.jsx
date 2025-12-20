import CategoryPageClient from '../../../components/CategoryPageClient'
import productsData from '../../../data/products.json'

// This function is required for static export with dynamic routes
export function generateStaticParams() {
  // Get unique categories from products
  const categories = [...new Set(productsData.map((p) => p.category))]

  return categories.map((category) => ({
    slug: category,
  }))
}

export default function CategoryPage({ params }) {
  const { slug } = params

  return <CategoryPageClient categorySlug={slug} />
}