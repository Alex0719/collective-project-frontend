import HomePage from 'containers/pages/HomePage';
import Test from 'containers/pages/Test';
import Company from 'containers/pages/Company';
import Internships from 'containers/pages/Internships';
import Dashboard from '../../containers/pages/Dashboard';
import InternshipDetails from '../pages/InternshipDetails';

import StudentManagement from '../../containers/elements/StudentManagement';
import InternshipManagement from '../../containers/elements/InternshipManagement';
import Student from '../elements/Student';
import Unauthorized from '../../containers/pages/Unauthorized';

export const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/company/internships',
    component: Internships,
  },
  {
    path:'/management/:id',
    component: StudentManagement,
  },
  {
    path: '/internships/management',
    component: InternshipManagement,
  },
  {
    path: '/student',
    component: Student,
  },
  {
    path: '/internship/:id/details',
    component: InternshipDetails,
  },
  {
    path: '/unauthorized',
    component: Unauthorized,
  }
];
