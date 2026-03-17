import { lazy } from 'react';
import { Navigate, type RouteObject } from 'react-router-dom';



const Home = lazy(() => import('../pages/Home'));
const Root = lazy(() => import('../pages/Root'));
const Signup = lazy(() => import('../pages/SignUp'));
const Login = lazy(() => import('../pages/Login'));
const AdminDashboard = lazy(() => import('../pages/Admin/AdminDashboard'));
const InstructorDashboard = lazy(() => import('../pages/Instructor/InstructorDashboard'));
const StudentDashboard = lazy(() => import('../pages/Students/StudentDashboard'));
const Profile = lazy(() => import('../pages/User/Profile'));






export type RoutesType = {
  [key in
    | 'DEFAULT'
    | 'HOME'
    | 'NOT_FOUND'
    | 'REGISTER'
    | 'LOGIN'
    | 'ADMIN_DASHBOARD'
    | 'INSTRUCTOR_DASHBOARD'
    | 'STUDENT_DASHBOARD'
    | 'EDIT_PROFILE'
  ]: {
    path: string;
    headerName?: string;
    element: RouteObject['element'];
    allowedRoles?: number[];
    routeType: 'public' | 'authenticate' | 'un-authenticate';
  } 
} 

export const ROUTES: RoutesType = {
  DEFAULT: {
    path: '/',
    routeType: 'public',
    allowedRoles: [1,2,3],
    element: <Root />
  },
  HOME: {
    path: '/home',
    headerName: 'Home',
    routeType: 'authenticate',
    allowedRoles: [1,2,3],
    element: <Home />
  },
  REGISTER:{
    path: '/register',
    routeType: 'public',
    allowedRoles: [1,2,3],
    headerName: 'register',
    element: <Signup />,
  },
  LOGIN:{
    path: '/login',
    headerName: 'login',
    routeType: 'public',
    allowedRoles: [1,2,3],
    element: <Login />,
  },
  ADMIN_DASHBOARD: {
    path: '/admin/dashboard',
    element: <AdminDashboard />,
    routeType: 'authenticate',
    allowedRoles: [1],
  },
  INSTRUCTOR_DASHBOARD: {
    path: '/instructor/dashboard',
    element: <InstructorDashboard />,
    routeType: 'authenticate',
    allowedRoles: [2],
  },
  STUDENT_DASHBOARD: {
    path: '/student/dashboard',
    element: <StudentDashboard />,
    routeType: 'authenticate',
    allowedRoles: [3],
  },
  EDIT_PROFILE: {
    path: '/edit-profile',
    element: <Profile/>,
    routeType: 'authenticate',
    allowedRoles: [1,2,3],
  },
  NOT_FOUND: {
    routeType: 'public',
    path: '*',
    element: <Navigate to={'/home'} />
  }
} as const;
