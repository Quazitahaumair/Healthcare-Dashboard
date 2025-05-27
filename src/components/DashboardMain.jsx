import React from 'react';
import ActivityChart from './ActivityChart'; 
import ProfileCard from './ProfileCard';   
import UpcomingAppointments from './UpcomingAppointments'; 
import DoctorSearch from './DoctorSearch'; 

const DashboardMain = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Welcome Back, User</h2>
      <p>This is the main dashboard area.</p>

      {/* Chart Feature */}
      <ActivityChart />

      {/* Feature: Doctor Profiles */}
      <h3 style={{ marginTop: '30px' }}>Our Top Doctors</h3>
      <ProfileCard
        name="Dr. Sarah Johnson"
        role="Cardiologist"
        specialty="Heart Specialist"
        image="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <ProfileCard
        name="Dr. Mark Davis"
        role="Neurologist"
        specialty="Brain & Spine"
        image="https://randomuser.me/api/portraits/men/35.jpg"
      />

      {/* Feature: Upcoming Appointments */}
      <UpcomingAppointments />
            <DoctorSearch />

    </div>
  );
};

export default DashboardMain;
