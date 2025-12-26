import React from 'react';
import { motion } from 'framer-motion';
import { BoxIcon } from 'lucide-react';
interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'neutral' | 'negative';
  label?: string;
  labelColor?: string;
  icon: BoxIcon;
  iconColor: string;
  borderColor: string;
  glowColor: string;
  delay?: number;
}
export function StatsCard({
  title,
  value,
  change,
  changeType = 'positive',
  label,
  labelColor = 'bg-gray-800 text-gray-300',
  icon: Icon,
  iconColor,
  borderColor,
  glowColor,
  delay = 0
}: StatsCardProps) {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay
  }} className={`bg-gray-900/50 rounded-xl p-6 border ${borderColor} relative overflow-hidden group hover:bg-gray-900/80 transition-all`}>
      {/* Glow Effect */}
      <div className={`absolute top-0 right-0 w-24 h-24 ${glowColor} rounded-bl-full -mr-4 -mt-4 transition-all opacity-10 group-hover:opacity-20`} />

      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className={`w-10 h-10 rounded-lg ${glowColor} bg-opacity-10 flex items-center justify-center ${iconColor}`}>
          <Icon size={20} />
        </div>

        {change && <span className={`text-sm font-medium px-2 py-1 rounded ${changeType === 'positive' ? 'text-emerald-400 bg-emerald-500/10' : 'text-gray-400 bg-gray-800'}`}>
            {change}
          </span>}

        {label && <span className={`text-sm font-medium px-2 py-1 rounded ${labelColor}`}>
            {label}
          </span>}
      </div>

      <div className="relative z-10">
        <p className="text-gray-400 text-sm font-medium">{title}</p>
        <h3 className="text-2xl lg:text-3xl font-bold text-white mt-1">
          {value}
        </h3>
      </div>
    </motion.div>;
}