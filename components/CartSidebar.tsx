'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { items, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  const sidebarVariants = {
    hidden: { 
      x: '100%',
      transition: { duration: 0.3, ease: 'easeIn' }
    },
    visible: { 
      x: 0,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed right-0 top-0 h-full w-full max-w-md bg-ivory shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-charcoal flex items-center gap-2">
                <ShoppingBag size={24} />
                Shopping Cart ({items.length})
              </h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <ShoppingBag size={48} className="mx-auto text-charcoal/30 mb-4" />
                  <p className="text-charcoal/60 mb-4">Your cart is empty</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="bg-charcoal text-ivory px-6 py-2 rounded-full hover:bg-gold transition-colors"
                  >
                    Continue Shopping
                  </motion.button>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <motion.div
                      key={`${item.id}-${item.size}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 bg-white p-4 rounded-xl"
                    >
                      <div className="w-20 h-20 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold text-charcoal mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-charcoal/60 mb-2">
                          Size: {item.size}
                        </p>
                        <p className="font-bold text-charcoal">
                          ${item.price.toLocaleString()}
                        </p>
                      </div>

                      <div className="flex flex-col justify-between items-end">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeFromCart(item.id, item.size || '')}
                          className="text-charcoal/40 hover:text-red-500 transition-colors"
                        >
                          <X size={16} />
                        </motion.button>

                        <div className="flex items-center gap-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, item.size || '', item.quantity - 1)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Minus size={14} />
                          </motion.button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, item.size || '', item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Plus size={14} />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-charcoal">Total:</span>
                  <span className="text-2xl font-bold text-charcoal">
                    ${getTotalPrice().toLocaleString()}
                  </span>
                </div>

                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-charcoal text-ivory py-3 rounded-full font-semibold hover:bg-gold transition-colors"
                  >
                    Proceed to Checkout
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="w-full border-2 border-charcoal text-charcoal py-3 rounded-full font-semibold hover:bg-charcoal hover:text-ivory transition-colors"
                  >
                    Continue Shopping
                  </motion.button>
                </div>

                <div className="mt-4 text-xs text-charcoal/60 text-center">
                  Free shipping on orders over $200
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;