import React from 'react';

export default function Card({ title, value }) {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '15px',
      borderRadius: '20px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  );
}
