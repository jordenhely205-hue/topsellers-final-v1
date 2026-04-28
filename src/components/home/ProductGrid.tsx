'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Star, Zap } from 'lucide-react';

const mockProducts = [
  { id: 1, name: 'iPhone 15 Pro Max - Titanium', price: '$1,199', image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=400', rating: 4.9, reviews: 128 },
  { id: 2, name: 'MacBook Air M3 - Midnight', price: '$1,299', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400', rating: 4.8, reviews: 85 },
  { id: 3, name: 'Sony WH-1000XM5 Headphones', price: '$399', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400', rating: 5.0, reviews: 240 },
  { id: 4, name: 'Rolex Submariner Date', price: '$14,500', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=400', rating: 5.0, reviews: 12 },
];

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {mockProducts.map((product) => (
        <motion.div
          key={product.id}
          whileHover={{ y: -10 }}
          className="glass rounded-3xl overflow-hidden border border-white/5 group shadow-xl"
        >
          <div className="relative h-64 overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1">
              <Zap size={10} fill="white" />
              HOT DEAL
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-white font-bold text-lg leading-tight group-hover:text-orange-400 transition-colors">{product.name}</h3>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex text-orange-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill={i < 4 ? "currentColor" : "none"} />)}
              </div>
              <span className="text-[10px] text-zinc-500 font-bold uppercase">{product.reviews} Reviews</span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-2xl font-black text-white">{product.price}</span>
              <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all">
                <ShoppingCart size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
