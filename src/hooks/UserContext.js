import React, { createContext, useContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const setUser = (newUserData) => {
    setUserData(newUserData);
  };

  // Sample function to set user data, using the data set upon successful login
  const initializeUser = () => {
    if (!userData) {
      // Set initial user data here if userData is null
      setUser({
        userId: '',
        userName: '',
        // Add other default properties or set empty string as needed
      });
    }
  };

  // Call initializeUser when the UserProvider is mounted
  useEffect(() => {
    initializeUser();
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
