import React, { useState } from 'react';
import Navbar from './Navbar';
import './index.css';

function App() {
  const [activePage, setActivePage] = useState('Home');

  const renderContent = () => {
    switch (activePage) {
      case 'Home':
        return <h2 className="page home">Welcome to Home</h2>;
      case 'About':
        return <h2 className="page about">About Us</h2>;
      case 'Contact':
        return <h2 className="page contact">Contact Us</h2>;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar onNavClick={setActivePage} />
      <div className="content">{renderContent()}</div>
    </div>
  );
}

export default App;