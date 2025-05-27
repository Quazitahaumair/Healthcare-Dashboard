import React from 'react';

export default function Sidebar() {
  return (
    <aside style={{
      width: '200px',
      backgroundColor: '#2f3542',
      color: 'white',
      padding: '20px'
    }}>
      <h3>Menu</h3>
      <ul style={{ listStyle: 'none', padding: 0 , margin: 0, fontSize: '16px' , lineHeight: '3', }}>
        <li>Dashboard</li>
        <li>Patients</li>
        <li>Doctors</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
}
