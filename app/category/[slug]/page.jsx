import Link from 'next/link';
import Image from 'next/image';
import products from '../../../data/products.json';
import { notFound } from 'next/navigation';

// For Static Export: Pre-generate all category paths
export async function generateStaticParams() {
  const categories = ['saree', 'suit', 'dupatta', 'fabric', 'dress-material', 'all'];
  return categories.map((slug) => ({ slug }));
}

export default function CategoryPage({ params }) {
  const { slug } = params;

  // Filter products
  const categoryProducts = slug === 'all'
    ? products
    : products.filter((p) => p.category === slug || p.subcategory === slug);

  if (!categoryProducts) return notFound();

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-heading text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-2 capitalize">
          {slug === 'all' ? 'All Collection' : `${slug} Collection`}
        </h1>
        <p className="text-gray-500 mb-8 font-body">
          Showing {categoryProducts.length} result(s)
        </p>

        {categoryProducts.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-400">No products found in this category.</h2>
            <Link href="/" className="mt-4 inline-block text-accent hover:underline">Go Back Home</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {categoryProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.slug}`} className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 relative">
                  {/* Image Placeholder if generic */}
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${product.images[0]})` }}
                  />

                  {product.tags && product.tags.includes('new') && (
                    <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 uppercase tracking-widest font-bold">New</span>
                  )}
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="text-lg font-heading text-primary group-hover:text-accent transition-colors truncate">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm capitalize">{product.subcategory}</p>
                  <p className="text-lg font-bold text-primary">₹{product.price.toLocaleString('en-IN')}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
