'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';
import ProductCard from './ProductCard';
import { products } from '@/lib/products';

interface ProductGridProps {
  onProductSelect: (product: any) => void;
}

const ProductGrid = ({ onProductSelect }: ProductGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Clothing', 'Accessories', 'Jewelry'];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Featured Collection
          </h2>
          <p className="text-charcoal/70 text-lg max-w-2xl mx-auto">
            Each piece is carefully selected for its exceptional quality, 
            timeless design, and uncompromising craftsmanship.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4"
        >
          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-charcoal/60" />
            <div className="flex gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-charcoal text-ivory'
                      : 'bg-warm-gray text-charcoal hover:bg-gold hover:text-ivory'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal/60" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-64 bg-warm-gray border border-transparent rounded-full focus:outline-none focus:border-gold focus:bg-ivory transition-all duration-200"
            />
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => onProductSelect(product)}
            />
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-charcoal/60 text-lg">
              No products found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;