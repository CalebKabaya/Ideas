// import ReactDOM from 'react-dom/client';

// //
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import reportWebVitals from './reportWebVitals';

// // ----------------------------------------------------------------------

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<App />);

// // If you want to enable client cache, register instead.
// serviceWorker.unregister();

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import ReactDOM from 'react-dom/client';
import { AuthProvider } from './hooks/AuthContext'; // Import the AuthProvider
import { UserProvider } from './hooks/UserContext'; // Import the UserProvider

import App from './App';

import './index.css';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap the App component with AuthProvider
root.render(
  <AuthProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </AuthProvider>
);

serviceWorker.unregister();
reportWebVitals();
