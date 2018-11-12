import HomePage from 'containers/pages/HomePage';
import Test from 'containers/pages/Test';
import Company from 'containers/pages/Company';

export const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/test',
    component: Test,
  },
  {
    path: '/company',
    component: Company,
  }
];
