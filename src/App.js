import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import DashboardLayout from './layouts/dashboardLayout';
import Home from './pages/Dashboard/Home';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <Router >
      <DashboardLayout>
        <Switch >
          <Route path='/Home' exact component={Home} />
          <Route path='/dashboardEdit' component={Dashboard} />
          <Redirect path='/' exact to='/dashboardEdit' />
        </Switch>
      </DashboardLayout>

    </Router >

  );
}

export default App;
