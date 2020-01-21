import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import DashboardLayout from './layouts/dashboardLayout';
import Home from './pages/Dashboard/Home';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <Router >
      <Redirect path='/' to='/dashboardLayout' />
      <Switch >
        <DashboardLayout>
          {/* <Route path='/' component={Dashboard} /> */}
          <Route path='/Home' component={Home} />
          <Route path='/dashboardEdit' component={Dashboard} />
          <Redirect path='/' to='/dashboardEdit' />
        </DashboardLayout>
      </Switch>

    </Router >

  );
}

export default App;
