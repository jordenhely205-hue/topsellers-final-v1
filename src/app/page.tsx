import Hero from '@/components/home/Hero';
import { CategoryGrid, MegaMenu } from '@/components/shared/CategoryDisplay';
import FeaturedProducts from '@/components/home/ProductGrid';
import { CurrencySwitcher } from '@/components/shared/PaymentUI';
import { ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Premium Navbar */}
      <nav className="fixed top-0 left-0 right-0 h-20 glass border-b border-white/5 z-[100] flex items-center">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-12 w-48 transition-transform duration-300 group-hover:scale-105">
                <img 
                  src="/assets/logo.png" 
                  alt="Top Seller Store Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>
            <div className="hidden md:block">
              <MegaMenu />
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <CurrencySwitcher />
            <Link href="/cart" className="text-zinc-400 hover:text-orange-400 transition-colors">
              <ShoppingCart size={22} />
            </Link>
            <Link href="/login" className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-bold hover:bg-white/10 transition-all flex items-center gap-2">
              <User size={16} />
              Account
            </Link>
          </div>
        </div>
      </nav>

      <Hero />

      {/* Category Grid Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
           <h2 className="text-4xl md:text-5xl font-black text-white">Explore Our <span className="text-gradient">World</span></h2>
           <p className="text-zinc-500 max-w-xl">Browse through our unlimited categories powered by dynamic attributes.</p>
        </div>
        <CategoryGrid />
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-[#010413] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-white">Trending <span className="text-orange-500">Deals</span></h2>
              <p className="text-zinc-500">The most wanted products from our top-rated sellers.</p>
            </div>
            <button className="px-8 py-3 rounded-full border border-white/10 text-white font-bold hover:bg-white/5 transition-all">
              View All Products
            </button>
          </div>
          <FeaturedProducts />
        </div>
      </section>

      {/* Trust & Footer Section */}
      <footer className="py-20 border-t border-white/5 bg-[#010413]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-8 mb-12">
            <img src="/assets/trust-badges.png" alt="Payment Security" className="h-16 object-contain opacity-80" />
            <div className="flex gap-12 text-zinc-500 text-[10px] font-bold uppercase tracking-[0.4em]">
              <span>Secure Transactions</span>
              <span>Global Logistics</span>
              <span>24/7 Support</span>
            </div>
          </div>
          <div className="text-center text-zinc-700 text-[10px] uppercase tracking-[0.5em] font-medium">
             © 2026 Top Seller Store eBay • The Gold Standard of Commerce
          </div>
        </div>
      </footer>
    </main>
  );
}
