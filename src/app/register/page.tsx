'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Mail, Lock, User, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
  const [role, setRole] = useState<'CUSTOMER' | 'VENDOR'>('CUSTOMER');

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl relative z-10"
      >
        <div className="glass rounded-[3rem] p-12 border border-white/10 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-white">Join the Elite</h2>
            <p className="text-zinc-500 mt-2">Create your account on the ultimate marketplace</p>
          </div>

          {/* Role Selection */}
          <div className="flex p-1 bg-white/5 rounded-2xl mb-10">
            <button 
              onClick={() => setRole('CUSTOMER')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${role === 'CUSTOMER' ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              <User size={18} />
              Customer
            </button>
            <button 
              onClick={() => setRole('VENDOR')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${role === 'VENDOR' ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              <Briefcase size={18} />
              Vendor
            </button>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">Full Name</label>
              <input className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-orange-500/50 transition-all" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">Email</label>
              <input className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-orange-500/50 transition-all" placeholder="john@example.com" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">Password</label>
              <input type="password" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-orange-500/50 transition-all" placeholder="••••••••" />
            </div>

            <button 
              type="button"
              className="md:col-span-2 btn-primary justify-center py-4 mt-4"
            >
              Create Account
              <UserPlus size={20} />
            </button>
          </form>

          <p className="mt-8 text-center text-zinc-500 text-sm">
            Already have an account? 
            <Link href="/login" className="text-orange-500 font-bold ml-2 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
