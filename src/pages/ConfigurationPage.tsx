import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Store, Save, AlertCircle, Mail, DollarSign, Type, Power } from 'lucide-react';
export function ConfigurationPage() {
  const [email, setEmail] = useState('');
  const [priorityPrice, setPriorityPrice] = useState('4.99');
  const [priorityText, setPriorityText] = useState('Get your order faster!');
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const handleSave = () => {
    console.log('Saving settings:', {
      email,
      priorityPrice,
      priorityText,
      isActive
    });
    // Simulate save delay then redirect
    setTimeout(() => {
      navigate('/dashboard');
    }, 500);
  };
  return <div className="min-h-screen bg-[#0a0a0c] text-gray-200 font-sans selection:bg-pink-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0c]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/20">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h1 className="text-sm font-semibold text-white tracking-wide">
                Configuration
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">
                Set up your priority processing
              </p>
            </div>
          </div>

          {/* Merchant Store Display */}
          <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white">
              <Store size={14} />
            </div>
            <span className="text-sm font-medium text-gray-300">
              Merchant Store
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Settings Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Notice Banner */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} className="group relative overflow-hidden rounded-xl bg-yellow-900/10 border border-yellow-500/20 p-5 transition-all duration-300 hover:bg-yellow-900/20">
              <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500/50"></div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                    <AlertCircle size={16} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-sm font-semibold text-yellow-500 uppercase tracking-wider">
                      Notice
                    </h3>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    RushFee collects a fixed fee of{' '}
                    <span className="text-white font-medium">$0.20</span> per
                    priority order. You will receive the full priority price for
                    each order. Shopify will invoice you monthly based on usage.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Merchant Email */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.1
            }} className="group relative overflow-hidden rounded-xl bg-[#131316] border border-white/5 p-1 transition-all duration-300 hover:border-purple-500/30 focus-within:border-purple-500/50 focus-within:shadow-[0_0_20px_-5px_rgba(168,85,247,0.15)] md:col-span-2">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 transition-opacity duration-300 opacity-50 group-hover:opacity-100"></div>
                <div className="p-5 pl-6">
                  <label className="flex items-center gap-2 text-sm font-medium text-purple-400 mb-3">
                    <Mail size={16} />
                    Merchant Email
                  </label>
                  <div className="relative">
                    <input type="email" placeholder="orders@yourstore.com" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-[#0a0a0c]/50 border border-white/10 rounded-lg px-4 py-3 text-base text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-[#0a0a0c] transition-all duration-200" />
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Receive alerts when a priority order is placed.
                  </p>
                </div>
              </motion.div>

              {/* Priority Price */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.2
            }} className="group relative overflow-hidden rounded-xl bg-[#131316] border border-white/5 p-1 transition-all duration-300 hover:border-cyan-500/30 focus-within:border-cyan-500/50 focus-within:shadow-[0_0_20px_-5px_rgba(6,182,212,0.15)]">
                <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500 transition-opacity duration-300 opacity-50 group-hover:opacity-100"></div>
                <div className="p-5 pl-6">
                  <label className="flex items-center gap-2 text-sm font-medium text-cyan-400 mb-3">
                    <DollarSign size={16} />
                    Priority Price
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="text-gray-500 text-base">$</span>
                    </div>
                    <input type="number" value={priorityPrice} onChange={e => setPriorityPrice(e.target.value)} step="0.01" className="w-full bg-[#0a0a0c]/50 border border-white/10 rounded-lg pl-8 pr-4 py-3 text-base text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-[#0a0a0c] transition-all duration-200 font-mono" />
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Minimum price is $2.99.
                  </p>
                </div>
              </motion.div>

              {/* Priority Text */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.3
            }} className="group relative overflow-hidden rounded-xl bg-[#131316] border border-white/5 p-1 transition-all duration-300 hover:border-blue-500/30 focus-within:border-blue-500/50 focus-within:shadow-[0_0_20px_-5px_rgba(59,130,246,0.15)]">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 transition-opacity duration-300 opacity-50 group-hover:opacity-100"></div>
                <div className="p-5 pl-6">
                  <label className="flex items-center gap-2 text-sm font-medium text-blue-400 mb-3">
                    <Type size={16} />
                    Priority Text
                  </label>
                  <div className="relative">
                    <input type="text" value={priorityText} onChange={e => setPriorityText(e.target.value)} className="w-full bg-[#0a0a0c]/50 border border-white/10 rounded-lg px-4 py-3 text-base text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-[#0a0a0c] transition-all duration-200" />
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Appears at checkout.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Activate Toggle */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }} className="group relative overflow-hidden rounded-xl bg-[#131316] border border-white/5 p-1 transition-all duration-300 hover:border-pink-500/30">
              <div className="absolute top-0 left-0 w-1 h-full bg-pink-500 transition-opacity duration-300 opacity-50 group-hover:opacity-100"></div>
              <div className="p-5 pl-6 flex items-center justify-between">
                <div className="flex-1">
                  <label className="flex items-center gap-2 text-sm font-medium text-pink-500 mb-1">
                    <Power size={16} />
                    Activate Priority Processing
                  </label>
                  <p className="text-xs text-gray-500">
                    Enable or disable the feature on your store instantly.
                  </p>
                </div>

                <label className="flex items-center cursor-pointer relative flex-shrink-0">
                  <input type="checkbox" checked={isActive} onChange={e => setIsActive(e.target.checked)} className="sr-only peer" />
                  <div className="w-14 h-7 bg-[#0a0a0c] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-pink-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-400 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-pink-600 peer-checked:after:bg-white"></div>
                </label>
              </div>
            </motion.div>

            {/* Save Button */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5
          }} className="pt-4 flex justify-end">
              <motion.button onClick={handleSave} whileHover={{
              scale: 1.05,
              boxShadow: '0 0 25px rgba(6, 182, 212, 0.4)'
            }} whileTap={{
              scale: 0.95
            }} className="group relative w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-sm font-bold text-white transition-all duration-200 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0a0c] focus:ring-cyan-500 shadow-lg shadow-cyan-500/25 overflow-hidden">
                <div className="animate-shimmer absolute inset-0 z-10"></div>
                <Save className="w-4 h-4 mr-2 relative z-20" />
                <span className="relative z-20">SAVE SETTINGS</span>
                <div className="absolute inset-0 rounded-xl ring-1 ring-white/20 group-hover:ring-white/30"></div>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column: Preview or Help */}
          <div className="hidden lg:block space-y-6">
            <div className="sticky top-24">
              <div className="bg-[#131316] border border-white/5 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Preview
                </h3>
                <div className="bg-white rounded-lg p-4 text-gray-900">
                  <div className="border-b border-gray-200 pb-4 mb-4">
                    <div className="flex justify-between font-medium">
                      <span>Subtotal</span>
                      <span>$49.99</span>
                    </div>
                  </div>

                  {isActive && <div className="bg-pink-50 border border-pink-100 rounded p-3 mb-4 flex items-start gap-3">
                      <input type="checkbox" checked readOnly className="mt-1 text-pink-500 rounded focus:ring-pink-500" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-gray-900">
                            Priority Processing
                          </span>
                          <span className="bg-pink-500 text-white text-[10px] px-1.5 rounded font-bold">
                            HOT
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 mt-0.5">
                          {priorityText}
                        </p>
                      </div>
                      <div className="ml-auto font-semibold text-sm text-gray-900">
                        +${priorityPrice}
                      </div>
                    </div>}

                  <div className="flex justify-between font-bold text-lg pt-2">
                    <span>Total</span>
                    <span>
                      $
                      {(49.99 + (isActive ? parseFloat(priorityPrice) : 0)).toFixed(2)}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  This is how the widget will appear on your checkout page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-gray-600">
            &copy; 2024 RushFee Inc. All rights reserved.
            <a href="#" className="text-gray-500 hover:text-gray-400 ml-2">
              Privacy
            </a>
            <span className="mx-1 text-gray-700">|</span>
            <a href="#" className="text-gray-500 hover:text-gray-400">
              Terms
            </a>
          </p>
        </div>
      </footer>
    </div>;
}