'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Mail, Lock, User, Briefcase, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
  const [role, setRole] = useState<'CUSTOMER' | 'VENDOR'>('CUSTOMER');

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-blue-600 to-orange-500" />

      <div className="mb-8 relative z-10">
        <Link href="/">
           <img src="/assets/logo.png" alt="Top Seller Store" className="h-14 mx-auto hover:scale-105 transition-transform" />
        </Link>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[600px] relative z-10"
      >
        <div className="bg-white rounded-[2.5rem] p-12 border border-zinc-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-[#0f172a] tracking-tight">Create Account</h2>
            <p className="text-zinc-500 mt-2 font-medium">Join our global network of top-rated sellers</p>
          </div>

          {/* Role Selection */}
          <div className="flex p-1.5 bg-[#f1f5f9] rounded-2xl mb-10">
            <button 
              onClick={() => setRole('CUSTOMER')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${role === 'CUSTOMER' ? 'bg-white text-orange-500 shadow-sm' : 'text-zinc-400 hover:text-zinc-600'}`}
            >
              <User size={16} />
              Customer
            </button>
            <button 
              onClick={() => setRole('VENDOR')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${role === 'VENDOR' ? 'bg-white text-orange-500 shadow-sm' : 'text-zinc-400 hover:text-zinc-600'}`}
            >
              <Briefcase size={16} />
              Vendor
            </button>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Full Name</label>
              <input className="w-full bg-[#f1f5f9] border-2 border-transparent rounded-2xl py-4 px-6 text-[#0f172a] outline-none focus:border-orange-500/20 focus:bg-white transition-all font-semibold" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Email</label>
              <input className="w-full bg-[#f1f5f9] border-2 border-transparent rounded-2xl py-4 px-6 text-[#0f172a] outline-none focus:border-orange-500/20 focus:bg-white transition-all font-semibold" placeholder="john@example.com" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Password</label>
              <input type="password" className="w-full bg-[#f1f5f9] border-2 border-transparent rounded-2xl py-4 px-6 text-[#0f172a] outline-none focus:border-orange-500/20 focus:bg-white transition-all font-semibold" placeholder="••••••••" />
            </div>

            <button 
              type="button"
              className="md:col-span-2 bg-[#ff7e00] text-white rounded-2xl py-5 text-xl font-black shadow-lg shadow-orange-500/30 hover:bg-[#e67200] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 mt-4"
            >
              Create Account
              <UserPlus size={22} />
            </button>
          </form>

          <p className="mt-8 text-center text-zinc-500 text-sm font-medium">
            Already have an account? 
            <Link href="/login" className="text-orange-500 font-black ml-2 hover:underline">
              Sign In
            </Link>
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
           <ShieldCheck size={14} className="text-emerald-500" />
           Join 10,000+ Verified Sellers Worldwide
        </div>
      </motion.div>
    </div>
  );
}
