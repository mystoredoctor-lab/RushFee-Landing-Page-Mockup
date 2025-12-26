import React, { useState } from 'react';
import { MoreHorizontal, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const ORDERS = [{
  id: '#10562',
  customer: 'Sarah Lee',
  total: '$89.99',
  fee: '$2.99',
  status: 'Processing',
  time: '2 min ago',
  month: 'April 2025',
  statusColor: 'text-emerald-400 bg-emerald-400/10'
}, {
  id: '#10561',
  customer: 'Mike Johnson',
  total: '$45.50',
  fee: '$2.99',
  status: 'Shipped',
  time: '15 min ago',
  month: 'April 2025',
  statusColor: 'text-blue-400 bg-blue-400/10'
}, {
  id: '#10560',
  customer: 'Emily Clark',
  total: '$72.99',
  fee: '$2.99',
  status: 'Delivered',
  time: '1 hour ago',
  month: 'April 2025',
  statusColor: 'text-purple-400 bg-purple-400/10'
}, {
  id: '#10559',
  customer: 'John Smith',
  total: '$58.25',
  fee: '$2.99',
  status: 'Completed',
  time: '2 hours ago',
  month: 'March 2025',
  statusColor: 'text-gray-400 bg-gray-400/10'
}, {
  id: '#10558',
  customer: 'Anna White',
  total: '$112.00',
  fee: '$4.99',
  status: 'Processing',
  time: '3 hours ago',
  month: 'March 2025',
  statusColor: 'text-emerald-400 bg-emerald-400/10'
}];
// Mock data for the "All Priority Orders for Month" view
const MOCK_MONTHLY_ORDERS = {
  'April 2025': [{
    id: '#10562',
    customer: 'Sarah Lee',
    total: '$89.99',
    fee: '$2.99',
    status: 'Processing',
    statusColor: 'text-emerald-400 bg-emerald-400/10'
  }, {
    id: '#10561',
    customer: 'Mike Johnson',
    total: '$45.50',
    fee: '$2.99',
    status: 'Shipped',
    statusColor: 'text-blue-400 bg-blue-400/10'
  }, {
    id: '#10560',
    customer: 'Emily Clark',
    total: '$72.99',
    fee: '$2.99',
    status: 'Delivered',
    statusColor: 'text-purple-400 bg-purple-400/10'
  }, {
    id: '#10557',
    customer: 'David Kim',
    total: '$120.00',
    fee: '$4.99',
    status: 'Processing',
    statusColor: 'text-emerald-400 bg-emerald-400/10'
  }, {
    id: '#10556',
    customer: 'Lisa Wang',
    total: '$34.50',
    fee: '$2.99',
    status: 'Delivered',
    statusColor: 'text-purple-400 bg-purple-400/10'
  }],
  'March 2025': [{
    id: '#10559',
    customer: 'John Smith',
    total: '$58.25',
    fee: '$2.99',
    status: 'Completed',
    statusColor: 'text-gray-400 bg-gray-400/10'
  }, {
    id: '#10558',
    customer: 'Anna White',
    total: '$112.00',
    fee: '$4.99',
    status: 'Processing',
    statusColor: 'text-emerald-400 bg-emerald-400/10'
  }, {
    id: '#10555',
    customer: 'Tom Brown',
    total: '$67.00',
    fee: '$2.99',
    status: 'Shipped',
    statusColor: 'text-blue-400 bg-blue-400/10'
  }, {
    id: '#10554',
    customer: 'Jerry Wilson',
    total: '$99.99',
    fee: '$4.99',
    status: 'Delivered',
    statusColor: 'text-purple-400 bg-purple-400/10'
  }]
};
export function OrdersTable() {
  const [selectedMonthOrders, setSelectedMonthOrders] = useState<any[] | null>(null);
  const [selectedMonthName, setSelectedMonthName] = useState<string>('');
  const handleOrderClick = (month: string) => {
    // In a real app, you'd fetch orders for this month
    // For now, we use mock data or fallback to an empty array
    const orders = MOCK_MONTHLY_ORDERS[month as keyof typeof MOCK_MONTHLY_ORDERS] || [];
    setSelectedMonthOrders(orders);
    setSelectedMonthName(month);
  };
  return <>
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden">
        <div className="p-6 flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <h3 className="text-lg font-bold text-white">
              Live Priority Orders
            </h3>
          </div>
          <button className="text-sm text-gray-400 hover:text-white transition-colors">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-900/50 border-b border-gray-800 text-xs uppercase text-gray-500 font-medium">
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Total</th>
                <th className="px-6 py-4">Fee</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {ORDERS.map(order => <tr key={order.id} onClick={() => handleOrderClick(order.month || 'April 2025')} className="hover:bg-gray-800/30 transition-colors group cursor-pointer">
                  <td className="px-6 py-4 text-white font-medium">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 text-gray-300">{order.customer}</td>
                  <td className="px-6 py-4 text-gray-300">{order.total}</td>
                  <td className="px-6 py-4 text-[#00E5FF] font-medium">
                    {order.fee}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${order.statusColor}`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${order.statusColor.replace('text-', 'bg-').replace('/10', '')}`}></span>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-gray-500">
                    {order.time}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Monthly Orders */}
      <AnimatePresence>
        {selectedMonthOrders && <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} onClick={() => setSelectedMonthOrders(null)} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <motion.div initial={{
          scale: 0.95,
          opacity: 0,
          y: 20
        }} animate={{
          scale: 1,
          opacity: 1,
          y: 0
        }} exit={{
          scale: 0.95,
          opacity: 0,
          y: 20
        }} className="relative w-full max-w-3xl bg-[#0B0E14] border border-gray-800 rounded-xl shadow-2xl overflow-hidden max-h-[80vh] flex flex-col">
              <div className="p-6 border-b border-gray-800 flex items-center justify-between bg-gray-900/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Priority Orders
                    </h3>
                    <p className="text-sm text-gray-400">
                      Showing all orders for {selectedMonthName}
                    </p>
                  </div>
                </div>
                <button onClick={() => setSelectedMonthOrders(null)} className="p-2 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="overflow-y-auto flex-1 p-0">
                <table className="w-full text-left">
                  <thead className="sticky top-0 bg-[#0B0E14] z-10">
                    <tr className="border-b border-gray-800 text-xs uppercase text-gray-500 font-medium">
                      <th className="px-6 py-4">Order ID</th>
                      <th className="px-6 py-4">Customer</th>
                      <th className="px-6 py-4">Total</th>
                      <th className="px-6 py-4">Fee</th>
                      <th className="px-6 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {selectedMonthOrders.map((order, idx) => <tr key={`${order.id}-${idx}`} className="hover:bg-gray-800/30 transition-colors">
                        <td className="px-6 py-4 text-white font-medium">
                          {order.id}
                        </td>
                        <td className="px-6 py-4 text-gray-300">
                          {order.customer}
                        </td>
                        <td className="px-6 py-4 text-gray-300">
                          {order.total}
                        </td>
                        <td className="px-6 py-4 text-[#00E5FF] font-medium">
                          {order.fee}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${order.statusColor}`}>
                            <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${order.statusColor.replace('text-', 'bg-').replace('/10', '')}`}></span>
                            {order.status}
                          </span>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>

              <div className="p-4 border-t border-gray-800 bg-gray-900/30 text-center">
                <button onClick={() => setSelectedMonthOrders(null)} className="text-sm text-gray-400 hover:text-white transition-colors">
                  Close
                </button>
              </div>
            </motion.div>
          </div>}
      </AnimatePresence>
    </>;
}