import HomePage from 'containers/pages/HomePage';
import Test from 'containers/pages/Test';
import Company from 'containers/pages/Company';
import Internships from 'containers/pages/Internships';
import Dashboard from '../../containers/pages/Dashboard';
import InternshipDetails from '../pages/InternshipDetails';

import StudentManagement from '../../containers/elements/StudentManagement';
import InternshipPosts from '../../containers/elements/InternshipPosts';
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
    path:'/management',
    component: StudentManagement,
  },
  {
    path: '/student',
    component: Student,
  },
  {
    path: '/internship/{id}/Details',
    component: InternshipDetails,
  },
  {
    path: '/unauthorized',
    component: Unauthorized,
  }
];
