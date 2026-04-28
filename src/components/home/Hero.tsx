'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';
import AISearch from './AISearch';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[#020617]">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#ff7e00]/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm font-bold text-orange-400 uppercase tracking-widest animate-glow">
             <Sparkles size={16} />
             UK & USA'S MOST PREMIUM MARKETPLACE
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black text-white leading-tight tracking-tighter">
            THE FUTURE OF <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-600 to-white">E-COMMERCE</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-zinc-400 text-xl md:text-2xl font-medium leading-relaxed">
            Experience a marketplace built for speed, powered by AI, and designed for the elite. 
            Shop the world's top-rated sellers in one cinematic ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
            <button className="btn-primary text-xl">
               Start Shopping
               <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 rounded-full glass text-white font-bold hover:bg-white/10 transition-all border border-white/10">
               View All Collections
            </button>
          </div>
        </motion.div>

        {/* AI Search Bar Integration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 w-full max-w-4xl mx-auto"
        >
          <div className="p-1 rounded-[2.5rem] bg-gradient-to-r from-orange-500/20 via-white/5 to-blue-500/20">
            <AISearch />
          </div>
        </motion.div>

        {/* Cinematic Banners Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-24 w-full h-[400px] md:h-[600px] relative rounded-[3rem] overflow-hidden glass border-white/5 shadow-2xl"
        >
           <img 
              src="/assets/banners.png" 
              alt="Official Marketplace Banners" 
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent pointer-events-none" />
           <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
              <div className="text-left">
                 <h3 className="text-3xl font-black text-white">CURATED COLLECTIONS</h3>
                 <p className="text-orange-500 font-bold uppercase tracking-widest text-sm">Exclusive Deals Live Now</p>
              </div>
              <div className="flex gap-4">
                 <img src="/assets/trust-badges.png" alt="Trust Badges" className="h-12 object-contain opacity-70" />
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
