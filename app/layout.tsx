import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Luxe | Premium Fashion & Accessories',
  description: 'Discover our curated collection of luxury fashion and premium accessories',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter bg-ivory text-charcoal antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}