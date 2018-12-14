import HomePage from 'containers/pages/HomePage';
import Test from 'containers/pages/Test';
import InternshipForm from 'containers/elements/InternshipForm';

export const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/form',
    component: InternshipForm,
  },
];
