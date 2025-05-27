import React, { useState } from 'react';
import ProfileCard from './ProfileCard';

const doctorData = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Cardiologist',
    specialty: 'Heart Specialist',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Dr. Mark Davis',
    role: 'Neurologist',
    specialty: 'Brain & Spine',
    image: 'https://randomuser.me/api/portraits/men/35.jpg',
  },
  {
    name: 'Dr. Anna Patel',
    role: 'Dermatologist',
    specialty: 'Skin Expert',
    image: 'https://randomuser.me/api/portraits/women/47.jpg',
  },
];

const DoctorSearch = () => {
  const [query, setQuery] = useState('');

  const filteredDoctors = doctorData.filter((doc) =>
    doc.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ marginTop: '30px' }}>
      <h3>Search Doctors</h3>
      <input
        type="text"
        placeholder="Search by name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: '10px',
          width: '100%',
          maxWidth: '300px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      {filteredDoctors.map((doc, index) => (
        <ProfileCard
          key={index}
          name={doc.name}
          role={doc.role}
          specialty={doc.specialty}
          image={doc.image}
        />
      ))}
    </div>
  );
};

export default DoctorSearch;
