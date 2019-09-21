import React from 'react';
import { HomePage } from './pages/HomePage';
import { ThankYouPage } from './pages/ThankYouPage';
import { Router } from '@reach/router';

const App = () => {
  return (
    <Router>
      <HomePage path="/" />
      <ThankYouPage path="/thankyou" />
    </Router>
  );
};

export default App;
