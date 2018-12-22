import HomePage from 'containers/pages/HomePage';
import Test from 'containers/pages/Test';
import InternshipForm from 'containers/elements/InternshipForm';
import Company from 'containers/pages/Company';
import Internships from 'containers/pages/Internships';
import Dashboard from '../../containers/pages/Dashboard';
import InternshipPosts from '../../containers/elements/InternshipPosts';

export const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/form',
    component: InternshipForm,
  },
  {
    path: '/company/internships',
    component: Internships,
  },
  {
    path: '/posts',
    component: InternshipPosts,
  },
];
