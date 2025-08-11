'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import ProductModal from '@/components/ProductModal';
import CartSidebar from '@/components/CartSidebar';
import Footer from '@/components/Footer';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar onCartOpen={() => setIsCartOpen(true)} />
      <main>
        <Hero />
        <ProductGrid onProductSelect={setSelectedProduct} />
      </main>
      <Footer />
      
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </div>
  );
}