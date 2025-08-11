'use client';

import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            whileHover={{ scale: 1.05 }}
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gold text-ivory text-xs font-bold px-2 py-1 rounded-full"
              >
                NEW
              </motion.span>
            )}
            {product.isSale && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full"
              >
                SALE
              </motion.span>
            )}
          </div>

          {/* Like Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors"
          >
            <Heart
              size={18}
              className={`transition-colors ${
                isLiked ? 'fill-red-500 text-red-500' : 'text-charcoal/60'
              }`}
            />
          </motion.button>

          {/* Overlay on Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/20 flex items-center justify-center"
          >
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.95 }}
              className="bg-ivory text-charcoal px-6 py-2 rounded-full font-medium shadow-lg hover:bg-gold hover:text-ivory transition-all duration-200"
            >
              Quick View
            </motion.button>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-charcoal text-lg group-hover:text-gold transition-colors">
              {product.name}
            </h3>
          </div>

          <p className="text-charcoal/60 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(product.rating) 
                    ? 'fill-gold text-gold' 
                    : 'text-gray-300'
                  }
                />
              ))}
            </div>
            <span className="text-sm text-charcoal/60 ml-1">
              ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-charcoal">
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-charcoal/50 line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="text-sm bg-charcoal text-ivory px-4 py-2 rounded-full hover:bg-gold transition-colors duration-200"
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;