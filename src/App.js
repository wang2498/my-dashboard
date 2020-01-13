import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import BaseLayout from './layouts';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <Router >
      <BaseLayout>
        <Route path='/Dashboard' component={Dashboard} />
      </BaseLayout>
    </Router >

  );
}

export default App;
