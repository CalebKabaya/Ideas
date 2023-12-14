import { useContext } from 'react';
import AuthContext from './AuthContext';

const useAuth = () => {
  return useContext(AuthContext); // Return the context value
};

export default useAuth;


// import { useContext } from "react";
// // import AuthContext from "../context/AuthProvider";

// const useAuth = () => {
//     // return useContext(AuthContext); // Return the context value
// }



// export default useAuth;
