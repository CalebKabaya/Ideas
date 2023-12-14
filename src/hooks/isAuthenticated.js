export const isAuthenticated = () => {
    // Implement your authentication logic here, e.g., checking for a token in localStorage
    const token = localStorage.getItem('token');
    return !!token; // Example: Return true if the user is authenticated, otherwise false
  };