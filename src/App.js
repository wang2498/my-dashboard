import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import BaseLayout from './layouts';
import DashboardLayout from './layouts/dashboardLayout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <Router >
      <Switch >
        <DashboardLayout>
          <Redirect path='/' to='/dashboardLayout' />
          {/* <Route path='/' component={Dashboard} /> */}
          <Route path='/dashboardLayout' component={Dashboard} />
        </DashboardLayout>
        <BaseLayout>
          <Route path='/page/Home' component={Home} />
        </BaseLayout>
      </Switch>

    </Router >

  );
}

export default App;
