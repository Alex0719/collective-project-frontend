import HomePage from 'containers/pages/HomePage';
import Test from 'containers/pages/Test';
import Company from 'containers/pages/Company';
import Dashboard from '../../containers/pages/Dashboard';
import InternshipDetails from '../pages/InternshipDetails';

export const routes = [
  {
    path: '/',
    component: Dashboard,
  },
  {
    path: '/test',
    component: HomePage,
  },
  {
    path: '/company',
    component: Company,
  },
  {
    path: '/internshipDetails',
    component: InternshipDetails,
  },
];
