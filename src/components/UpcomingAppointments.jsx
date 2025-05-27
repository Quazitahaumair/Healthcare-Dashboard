import React from 'react';
import './UpcomingAppointments.css';

const appointments = [
  {
    id: 1,
    date: '2025-06-01',
    time: '10:00 AM',
    name: 'Quazi',
    purpose: 'General Checkup',
  },
  {
    id: 2,
    date: '2025-06-02',
    time: '12:00 PM',
    name: 'Taha',
    purpose: 'Dental Cleaning',
  },
  {
    id: 3,
    date: '2025-06-03',
    time: '03:00 PM',
    name: 'Umair',
    purpose: 'Eye Examination',
  },
];

const UpcomingAppointments = () => {
  return (
    <div className="appointments-container">
      <h3>Upcoming Appointments</h3>
      <ul>
        {appointments.map((appt) => (
          <li key={appt.id} className="appointment-card">
            <div>
              <strong>{appt.name}</strong> - {appt.purpose}
            </div>
            <div>{appt.date} @ {appt.time}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingAppointments;
