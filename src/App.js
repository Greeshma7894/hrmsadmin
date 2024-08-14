import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';


const App = () => {
  return (
    <Router>
      <div>
        <AdminDashboard/>
      </div>
    </Router>
  );
};

export default App;
