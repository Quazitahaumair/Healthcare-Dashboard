import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, role, specialty, image }) => {
  return (
    <div className="profile-card">
      <img
        src={image || 'https://via.placeholder.com/80'}
        alt={name}
        className="profile-image"
      />
      <div className="profile-info">
        <h4>{name}</h4>
        <p className="role">{role}</p>
        <p className="specialty">{specialty}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
