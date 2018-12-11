import HomePage from 'containers/pages/HomePage';
import Test from 'containers/pages/Test';
import Company from 'containers/pages/Company';
import Dashboard from '../../containers/pages/Dashboard';
<<<<<<< HEAD
import InternshipDetails from '../pages/InternshipDetails';

=======
import InternshipPosts from '../../containers/elements/InternshipPosts';
>>>>>>> development
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
<<<<<<< HEAD
    path: '/internshipDetails',
    component: InternshipDetails,
=======
    path: '/posts',
    component: InternshipPosts,
>>>>>>> development
  },
];
