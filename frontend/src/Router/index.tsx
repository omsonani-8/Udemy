import { Suspense } from 'react';
import {
  type RouteObject,
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';
import AuthenticateRoute from './RouteGuard/AuthenticateRoute';
import UnAuthenticateRoute from './RouteGuard/UnAuthenticateRoute';
import RoleRoute from '../Router/RouteGuard/RoleRoute';
import { ROUTES } from '../constant/routesPath';
import Layout from '../components/Layout';

const applySuspense = (routes: RouteObject[]): RouteObject[] => {
  return routes.map((route) => ({
    ...route,
    element: (
      <Suspense fallback={<div>Loading...</div>}>{route.element}</Suspense>
    )
  }));
};

export const RoutesArray: RouteObject[] = applySuspense(
  Object.keys(ROUTES).map((key) => {
    const route = ROUTES[key as keyof typeof ROUTES];

    const routeObj: RouteObject = {
      path: route.path
    };

    if (route.routeType === 'authenticate') {
      routeObj.element = (
        <AuthenticateRoute>
          <RoleRoute allowedRoles={route.allowedRoles}>
            <Layout>
            {route.element}
            </Layout>
          </RoleRoute>
        </AuthenticateRoute>
      );
    } else if (route.routeType === 'un-authenticate') {
      routeObj.element = (
        <UnAuthenticateRoute>{route.element}</UnAuthenticateRoute>
      );
    } else {
      routeObj.element = (<Layout>
        {route.element}
        </Layout>);
    }

    return routeObj;
  })
);

const AllRoute = createBrowserRouter(RoutesArray);

const Route = () => <RouterProvider router={AllRoute} />;

export default Route;
