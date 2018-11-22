import HomePage from 'containers/pages/HomePage';
import Test from 'containers/pages/Test';
import Company from 'containers/pages/Company';
import Dashboard from '../../containers/pages/Dashboard';

export const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/test',
    component: Dashboard,
  },
  {
    path: '/company',
    component: Company,
  },
];
