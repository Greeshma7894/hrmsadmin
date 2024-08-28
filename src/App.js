import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'; // Import these
import AdminDashboard from './components/AdminDashboard'; // Adjust path as needed

const queryClient = new QueryClient(); // Create a QueryClient instance

const App = () => {
  return (
    <QueryClientProvider client={queryClient}> {/* Wrap with QueryClientProvider */}
      <Router>
        <div>
          <AdminDashboard />
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
