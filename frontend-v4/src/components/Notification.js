import React, { useState, useEffect } from 'react';
import { getNotifications, markNotificationAsRead } from '../utils/notifications';

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    const fetchedNotifications = await getNotifications();
    setNotifications(fetchedNotifications);
  };

  const handleMarkAsRead = async (id) => {
    await markNotificationAsRead(id);
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p>No new notifications</p>
      ) : (
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id} className={`notification ${notification.type}`}>
              {notification.message}
              <button onClick={() => handleMarkAsRead(notification.id)}>Mark as read</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Notifications;