import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Sidebar from './components/Sidebar';
import DashboardMain from './components/DashboardMain';  // import DashboardMain
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="card-grid">
          <Card title="Patients" value="1240" />
          <Card title="Appointments" value="320" />
          <Card title="Doctors" value="58" />
          <Card title="Revenue" value="$12,400" />
        </div>

        {/* Add DashboardMain here */}
        <DashboardMain />
      </div>
    </div>
  );
}
