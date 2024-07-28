import React, { createContext, useState, useEffect } from 'react';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const updateTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  return (
    <SettingsContext.Provider value={{ theme, updateTheme, notifications, toggleNotifications }}>
      {children}
    </SettingsContext.Provider>
  );
};