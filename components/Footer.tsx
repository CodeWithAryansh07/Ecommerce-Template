'use client';

import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Shop',
      links: ['New Arrivals', 'Collections', 'Sale', 'Gift Cards']
    },
    {
      title: 'Support',
      links: ['Contact Us', 'Size Guide', 'Shipping', 'Returns']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Sustainability', 'Press']
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  return (
    <footer className="bg-charcoal text-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h3 className="text-3xl font-bold mb-4">LUXE</h3>
              <p className="text-ivory/70 mb-6 max-w-md">
                Curating exceptional fashion and luxury accessories for those who 
                appreciate the finest craftsmanship and timeless design.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm text-ivory/60">
                <div className="flex items-center gap-3">
                  <MapPin size={16} />
                  <span>123 Luxury Ave, Fashion District, NY 10001</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} />
                  <span>hello@luxe.com</span>
                </div>
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <motion.a
                        href="#"
                        whileHover={{ x: 4 }}
                        className="text-ivory/70 hover:text-gold transition-colors text-sm"
                      >
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-ivory/20 py-12"
        >
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Stay in Touch</h3>
            <p className="text-ivory/70 mb-6">
              Subscribe to receive updates on new arrivals and exclusive offers.
            </p>
            
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-ivory/10 border border-ivory/20 rounded-full text-ivory placeholder-ivory/50 focus:outline-none focus:border-gold transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold text-charcoal px-6 py-3 rounded-full font-semibold hover:bg-gold-light transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-ivory/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-ivory/60 text-sm">
              © 2025 Luxe. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-ivory/10 rounded-full hover:bg-gold hover:text-charcoal transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm text-ivory/60">
              <motion.a 
                href="#"
                whileHover={{ color: '#D4AF37' }}
                className="hover:text-gold transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#"
                whileHover={{ color: '#D4AF37' }}
                className="hover:text-gold transition-colors"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;