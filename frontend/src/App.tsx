import React from 'react';
import DashContainer from './pages/DashContainer';
import './App.scss';

import AdminPage from './pages/AdminPage';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <AdminPage />
      <Footer />
    </div>
  );
}

export default App;
