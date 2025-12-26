import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, CheckCircle, Truck } from 'lucide-react';
const MOCK_ORDERS = [{
  id: '#10562',
  customer: 'Sarah L.',
  amount: '$89.99',
  status: 'Processing',
  color: 'cyan',
  icon: Package
}, {
  id: '#10563',
  customer: 'Michael R.',
  amount: '$124.50',
  status: 'Confirmed',
  color: 'pink',
  icon: CheckCircle
}, {
  id: '#10564',
  customer: 'Jessica M.',
  amount: '$67.25',
  status: 'Shipped',
  color: 'purple',
  icon: Truck
}, {
  id: '#10565',
  customer: 'David K.',
  amount: '$199.99',
  status: 'Processing',
  color: 'cyan',
  icon: Package
}, {
  id: '#10566',
  customer: 'Emma W.',
  amount: '$45.00',
  status: 'Confirmed',
  color: 'pink',
  icon: CheckCircle
}];
export function LiveOrdersWidget() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % MOCK_ORDERS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const currentOrder = MOCK_ORDERS[currentIndex];
  const Icon = currentOrder.icon;
  return <div className="h-full bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border border-gray-700 rounded-xl overflow-hidden relative p-6 flex flex-col">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{
        y: [0, -20, 0]
      }} transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }} className="absolute top-0 right-0 w-64 h-64 bg-[#00E5FF]/5 rounded-full blur-3xl -mr-16 -mt-16" />
        <motion.div animate={{
        y: [0, 20, 0]
      }} transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 1
      }} className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF0080]/5 rounded-full blur-3xl -ml-16 -mb-16" />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <h3 className="text-lg font-bold text-white">Live Orders</h3>
        </div>
        <div className="text-xs text-gray-400 bg-gray-800/80 backdrop-blur border border-gray-700 px-2 py-1 rounded">
          Real-time
        </div>
      </div>

      {/* Animated Card */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.div key={currentOrder.id} initial={{
          opacity: 0,
          y: 20,
          scale: 0.95
        }} animate={{
          opacity: 1,
          y: 0,
          scale: 1
        }} exit={{
          opacity: 0,
          y: -20,
          scale: 0.95
        }} transition={{
          duration: 0.4
        }} className="w-full bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl p-5 shadow-xl">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${currentOrder.color === 'cyan' ? 'bg-[#00E5FF]/10 text-[#00E5FF]' : currentOrder.color === 'pink' ? 'bg-[#FF0080]/10 text-[#FF0080]' : 'bg-[#7C3AED]/10 text-[#7C3AED]'}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <div className="text-white font-bold">{currentOrder.id}</div>
                  <div className="text-gray-400 text-sm">
                    {currentOrder.customer}
                  </div>
                </div>
              </div>
              <div className="text-xl font-bold text-white">
                {currentOrder.amount}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${currentOrder.color === 'cyan' ? 'bg-[#00E5FF]/10 text-[#00E5FF]' : currentOrder.color === 'pink' ? 'bg-[#FF0080]/10 text-[#FF0080]' : 'bg-[#7C3AED]/10 text-[#7C3AED]'}`}>
                {currentOrder.status}
              </span>
              <span className="text-xs text-gray-500">Just now</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Stats Footer */}
      <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-800 relative z-10">
        <div>
          <div className="text-gray-400 text-xs mb-1">Today</div>
          <div className="text-2xl font-bold text-white">127</div>
        </div>
        <div>
          <div className="text-gray-400 text-xs mb-1">This Hour</div>
          <div className="text-2xl font-bold text-white">18</div>
        </div>
      </div>
    </div>;
}