import React, { useState } from 'react';

const notificationsMock = [
  { id: 1, message: 'New appointment booked', read: false },
  { id: 2, message: 'Patient sent a message', read: false },
  { id: 3, message: 'Doctor updated availability', read: true },
  { id: 4, message: 'Slot is empty', read: false },
];

const Notifications = () => {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(notificationsMock);

  const unreadCount = notifications.filter(n => !n.read).length;

  const toggleDropdown = () => setOpen(!open);

  const markAsRead = (id) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    ));
  };

  return (
    <div className="notifications-container">
      <button className="notification-button" onClick={toggleDropdown}>
        🔔
        {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
      </button>

      {open && (
        <div className="notification-dropdown">
          {notifications.length === 0 && <p>No notifications</p>}
          {notifications.map(n => (
            <div
              key={n.id}
              className={`notification-item ${n.read ? 'read' : 'unread'}`}
              onClick={() => markAsRead(n.id)}
            >
              {n.message}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notifications;
