'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, Mail, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-blue-600 to-orange-500" />
      
      <div className="mb-8 relative z-10">
        <Link href="/">
           <img src="/assets/logo.png" alt="Top Seller Store" className="h-14 mx-auto hover:scale-105 transition-transform" />
        </Link>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[450px] relative z-10"
      >
        <div className="bg-white rounded-3xl p-10 border border-zinc-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          <div className="mb-10">
            <h2 className="text-3xl font-black text-[#0f172a] tracking-tight">Sign In</h2>
            <p className="text-zinc-500 mt-2 font-medium">Access your global marketplace account</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-orange-500 transition-colors" size={18} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#f1f5f9] border-2 border-transparent rounded-2xl py-4 pl-12 pr-4 text-[#0f172a] outline-none focus:border-orange-500/20 focus:bg-white transition-all font-semibold"
                  placeholder="name@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Password</label>
                <Link href="#" className="text-[10px] font-black text-blue-600 uppercase tracking-[0.1em] hover:underline">Forgot?</Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-orange-500 transition-colors" size={18} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#f1f5f9] border-2 border-transparent rounded-2xl py-4 pl-12 pr-4 text-[#0f172a] outline-none focus:border-orange-500/20 focus:bg-white transition-all font-semibold"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="button"
              className="w-full bg-[#ff7e00] text-white rounded-2xl py-4 text-lg font-black shadow-lg shadow-orange-500/30 hover:bg-[#e67200] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              Sign In to Account
              <ArrowRight size={20} />
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-zinc-100 text-center">
            <p className="text-zinc-500 text-sm font-medium">
              New to Top Seller Store? 
              <Link href="/register" className="text-orange-500 font-black ml-2 hover:underline">
                Register Now
              </Link>
            </p>
          </div>
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-2 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
           <ShieldCheck size={14} className="text-emerald-500" />
           Secure & Encrypted Connection
        </div>
      </motion.div>
    </div>
  );
}
