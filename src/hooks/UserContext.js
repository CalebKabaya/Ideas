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
    // Assuming userData is initially set to null
    const fetchedUserData = userData; // Use the existing userData (set upon successful login)
    if (fetchedUserData) {
      setUser(fetchedUserData);
    } else {
      // Handle scenarios where fetchedUserData is null or undefined
      // For instance: setUser(null);
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
