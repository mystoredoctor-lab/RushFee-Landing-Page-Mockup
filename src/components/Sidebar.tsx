import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Settings2, ClipboardList, X, Store } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
interface SidebarProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}
export function Sidebar({
  mobileOpen,
  setMobileOpen
}: SidebarProps) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const navItems = [{
    name: 'Dashboard',
    path: '/dashboard',
    icon: LayoutDashboard
  }, {
    name: 'Configuration',
    path: '/config',
    icon: Settings2
  }, {
    name: 'Orders',
    path: '/orders',
    icon: ClipboardList
  }];
  const SidebarContent = () => <div className="flex flex-col h-full bg-[#0B0E14] border-r border-gray-800">
      <div className="p-6 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center gap-2 select-none">
          <div className="text-2xl font-bold tracking-tight text-white">
            Rush
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#FF0080]">
              Fee
            </span>
          </div>
        </div>
        <button onClick={() => setMobileOpen(false)} className="lg:hidden text-gray-400 hover:text-white">
          <X size={24} />
        </button>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {navItems.map(item => <Link key={item.path} to={item.path} className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive(item.path) ? 'text-white bg-gray-900 border border-gray-800' : 'text-gray-400 hover:text-white hover:bg-gray-900/50'}`}>
            <item.icon size={20} className={isActive(item.path) ? 'text-[#00E5FF]' : ''} />
            <span className="font-medium">{item.name}</span>
          </Link>)}
      </nav>

      {/* Merchant Store Section */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-800">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shrink-0">
            <Store size={16} />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-white truncate">
              Merchant Store
            </p>
            <p className="text-xs text-gray-500 truncate">Pro Plan</p>
          </div>
        </div>
      </div>
    </div>;
  return <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col shrink-0 fixed inset-y-0 z-50">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && <>
            <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} onClick={() => setMobileOpen(false)} className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm" />
            <motion.div initial={{
          x: '-100%'
        }} animate={{
          x: 0
        }} exit={{
          x: '-100%'
        }} transition={{
          type: 'spring',
          damping: 25,
          stiffness: 200
        }} className="fixed inset-y-0 left-0 w-64 z-50 lg:hidden">
              <SidebarContent />
            </motion.div>
          </>}
      </AnimatePresence>
    </>;
}