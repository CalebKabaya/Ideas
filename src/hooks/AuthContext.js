// import { createContext } from 'react';

// const AuthContext = createContext();

// export default AuthContext;

// import React, { createContext, useState } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(/* your authentication logic here */);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// AuthContext.js

// AuthContext.js

import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(/* Your authentication logic here */);

  // Your authentication logic to determine if the user is authenticated
  // Example: Check if a token exists in localStorage
  const checkAuthStatus = () => {
    const token = localStorage.getItem('jwtToken'); // Retrieve token from localStorage
    setIsAuthenticated(!!token); // Update isAuthenticated based on the token's presence
  };

  // Call the checkAuthStatus function when the AuthProvider is mounted
  React.useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
