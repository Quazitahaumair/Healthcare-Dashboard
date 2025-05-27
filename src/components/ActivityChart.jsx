import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Mon', appointments: 7 },
  { name: 'Tue', appointments: 6 },
  { name: 'Wed', appointments: 8 },
  { name: 'Thu', appointments: 6 },
  { name: 'Fri', appointments: 4 },
  { name: 'Sat', appointments: 5 },
  { name: 'Sun', appointments: 6 },
];

const ActivityChart = () => (
  <div style={{ width: '80%', height: 300 }}>
    <h3>Appointments This Week</h3>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="appointments" fill="#4b7bec" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ActivityChart;
