import React from 'react';
import Notifications from './Notifications';

export default function Header() {
  return (
    <header
      style={{
        marginBottom: '20px',
        padding: '10px 10px',
        backgroundColor: '#4b7bec',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h1 style={{ margin: 0 }}>Healthcare Dashboard</h1>
      <Notifications />
    </header>
  );
}
