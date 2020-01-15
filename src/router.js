import Layout from './layouts'
import dashboardLayout from './layouts/dashboardLayout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
export default [
  {
    path: '/',
    component: Layout,
    indexRoute: 'Home',
    route: [
      {
        path: 'home',
        component: Home
      }
    ]
  },
  {
    path: '/dashboardLayout',
    component: dashboardLayout,
    route: [
      {
        path: '/edit',
        component: Dashboard
      }
    ]
  }
]