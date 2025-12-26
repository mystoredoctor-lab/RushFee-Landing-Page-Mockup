import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { StatsCard } from '../components/dashboard/StatsCard';
import { RevenueChart } from '../components/dashboard/RevenueChart';
import { LiveOrdersWidget } from '../components/dashboard/LiveOrdersWidget';
import { OrdersTable } from '../components/dashboard/OrdersTable';
import { Menu, Calendar, ChevronDown, TrendingUp, DollarSign, Package, Percent, Store } from 'lucide-react';
export function DashboardPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('April 2025');
  const [monthDropdownOpen, setMonthDropdownOpen] = useState(false);
  const months = ['April 2025', 'March 2025', 'February 2025', 'January 2025'];
  return <div className="flex min-h-screen bg-[#0B0E14] text-white font-sans">
      <Sidebar mobileOpen={mobileMenuOpen} setMobileOpen={setMobileMenuOpen} />

      <main className="flex-1 flex flex-col min-w-0 lg:pl-64 transition-all duration-300">
        {/* Header */}
        <header className="sticky top-0 z-30 flex items-center justify-between px-4 lg:px-8 py-4 bg-[#0B0E14]/80 backdrop-blur-md border-b border-gray-800">
          <div className="flex items-center gap-4">
            <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden text-gray-400 hover:text-white">
              <Menu size={24} />
            </button>
            <div className="flex items-center gap-3">
              <h1 className="text-xl lg:text-2xl font-bold text-white">
                Dashboard
              </h1>
              <div className="hidden md:flex h-6 w-px bg-gray-800"></div>
              <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900 border border-gray-800">
                <Store size={14} className="text-gray-400" />
                <span className="text-sm text-gray-300">Merchant Store</span>
              </div>
            </div>
          </div>

          {/* Month Selector */}
          <div className="relative">
            <button onClick={() => setMonthDropdownOpen(!monthDropdownOpen)} className="flex items-center gap-2 px-3 lg:px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-gray-300 hover:text-white hover:border-gray-700 transition-all">
              <Calendar size={16} />
              <span className="hidden sm:inline">{selectedMonth}</span>
              <ChevronDown size={14} className={`transition-transform ${monthDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {monthDropdownOpen && <>
                <div className="fixed inset-0 z-10" onClick={() => setMonthDropdownOpen(false)} />
                <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-xl overflow-hidden z-20">
                  {months.map(month => <button key={month} onClick={() => {
                setSelectedMonth(month);
                setMonthDropdownOpen(false);
              }} className={`w-full text-left px-4 py-2 text-sm transition-colors ${selectedMonth === month ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
                      {month}
                    </button>)}
                </div>
              </>}
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-4 lg:p-8 space-y-8 overflow-y-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
            <StatsCard title="Total Rush Revenue" value="$3,275.80" change="+12.5%" icon={TrendingUp} iconColor="text-emerald-400" borderColor="border-emerald-500/20" glowColor="bg-emerald-500" delay={0} />
            <StatsCard title="Rush Fee" value="$258.00" label="App Fees" labelColor="bg-[#FF0080]/10 text-[#FF0080]" icon={DollarSign} iconColor="text-[#FF0080]" borderColor="border-[#FF0080]/20" glowColor="bg-[#FF0080]" delay={0.1} />
            <StatsCard title="Priority Orders" value="860" label="This Month" labelColor="bg-blue-500/10 text-blue-400" icon={Package} iconColor="text-blue-400" borderColor="border-blue-500/20" glowColor="bg-blue-500" delay={0.2} />
            <StatsCard title="Conversion Rate" value="18.5%" change="+3.2%" icon={Percent} iconColor="text-[#7C3AED]" borderColor="border-[#7C3AED]/20" glowColor="bg-[#7C3AED]" delay={0.3} />
          </div>

          {/* Charts & Widgets */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Revenue Chart */}
            <div className="lg:col-span-2 bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <h3 className="text-lg font-semibold text-white">
                  Revenue Overview
                </h3>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-xs font-medium text-white bg-gray-800 rounded hover:bg-gray-700 transition-colors">
                    7D
                  </button>
                  <button className="px-3 py-1 text-xs font-medium text-gray-400 hover:text-white transition-colors">
                    1M
                  </button>
                  <button className="px-3 py-1 text-xs font-medium text-gray-400 hover:text-white transition-colors">
                    3M
                  </button>
                </div>
              </div>
              <RevenueChart />
            </div>

            {/* Live Orders Widget */}
            <div className="lg:col-span-1 h-full">
              <LiveOrdersWidget />
            </div>
          </div>

          {/* Orders Table */}
          <OrdersTable />
        </div>
      </main>
    </div>;
}