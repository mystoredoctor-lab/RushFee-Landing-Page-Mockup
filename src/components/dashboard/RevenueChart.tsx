import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [{
  name: 'Mon',
  value: 150
}, {
  name: 'Tue',
  value: 280
}, {
  name: 'Wed',
  value: 220
}, {
  name: 'Thu',
  value: 380
}, {
  name: 'Fri',
  value: 320
}, {
  name: 'Sat',
  value: 450
}, {
  name: 'Sun',
  value: 400
}];
export function RevenueChart() {
  return <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{
        top: 10,
        right: 10,
        left: -20,
        bottom: 0
      }}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00E5FF" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#00E5FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
          <XAxis dataKey="name" stroke="#6b7280" tick={{
          fill: '#6b7280',
          fontSize: 12
        }} axisLine={false} tickLine={false} dy={10} />
          <YAxis stroke="#6b7280" tick={{
          fill: '#6b7280',
          fontSize: 12
        }} axisLine={false} tickLine={false} tickFormatter={value => `$${value}`} />
          <Tooltip contentStyle={{
          backgroundColor: '#111827',
          borderColor: '#374151',
          borderRadius: '0.5rem',
          color: '#fff'
        }} itemStyle={{
          color: '#00E5FF'
        }} formatter={(value: number) => [`$${value}`, 'Revenue']} />
          <Area type="monotone" dataKey="value" stroke="#00E5FF" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>;
}