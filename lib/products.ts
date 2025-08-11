export interface Product {
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
  sizes?: string[];
  colors?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Cashmere Blend Coat",
    price: 1299,
    originalPrice: 1599,
    image: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Clothing",
    rating: 4.8,
    reviews: 142,
    description: "Luxurious cashmere blend coat with clean lines and impeccable tailoring. Perfect for sophisticated occasions and everyday elegance.",
    isNew: false,
    isSale: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Camel", "Navy"]
  },
  {
    id: 2,
    name: "Silk Designer Scarf",
    price: 285,
    image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Accessories",
    rating: 4.9,
    reviews: 89,
    description: "Hand-printed silk scarf featuring exclusive artistic patterns. Made from premium mulberry silk with hand-rolled edges.",
    isNew: true,
    colors: ["Ivory", "Coral", "Forest Green"]
  },
  {
    id: 3,
    name: "Pearl Drop Earrings",
    price: 450,
    image: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Jewelry",
    rating: 4.7,
    reviews: 203,
    description: "Elegant freshwater pearl drop earrings set in 18k gold vermeil. Classic design that complements both casual and formal attire.",
    isNew: false,
    colors: ["Gold", "Silver"]
  },
  {
    id: 4,
    name: "Leather Crossbody Bag",
    price: 675,
    originalPrice: 850,
    image: "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Accessories",
    rating: 4.6,
    reviews: 156,
    description: "Handcrafted Italian leather crossbody bag with adjustable strap. Features multiple compartments and premium hardware finishes.",
    isSale: true,
    colors: ["Black", "Cognac", "Burgundy"]
  },
  {
    id: 5,
    name: "Merino Wool Sweater",
    price: 195,
    image: "https://images.pexels.com/photos/2706650/pexels-photo-2706650.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Clothing",
    rating: 4.5,
    reviews: 98,
    description: "Ultra-soft merino wool sweater with ribbed details. Sustainably sourced materials with exceptional comfort and durability.",
    isNew: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Charcoal", "Dusty Rose"]
  },
  {
    id: 6,
    name: "Gold Chain Necklace",
    price: 890,
    image: "https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Jewelry",
    rating: 4.9,
    reviews: 67,
    description: "Delicate 14k gold chain necklace with subtle textural links. Versatile piece that layers beautifully or stands alone as a statement.",
    isNew: true,
    colors: ["Gold", "Rose Gold"]
  }
];