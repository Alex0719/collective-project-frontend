import HomePage from 'containers/pages/HomePage';
import Test from 'containers/pages/Test';
import Company from 'containers/pages/Company';
import Internships from 'containers/pages/Internships';
import Dashboard from '../../containers/pages/Dashboard';
import StudentManagement from '../../containers/elements/StudentManagement';
import InternshipPosts from '../../containers/elements/InternshipPosts';
import Student from '../elements/Student';
<<<<<<< HEAD
=======
import Unauthorized from '../../containers/pages/Unauthorized';
>>>>>>> 019d27fb49b632977ceae4a8b08ae8dd8f5dae45
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
    path: '/posts',
    component: InternshipPosts,
  },
  {
    path: '/student',
    component: Student,
  },
<<<<<<< HEAD
=======
    path: '/unauthorized',
    component: Unauthorized,
  }
>>>>>>> 019d27fb49b632977ceae4a8b08ae8dd8f5dae45
];
