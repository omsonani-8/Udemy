import { Suspense, type PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import SectionLoader from '../../common/Loader/Loader';
import { currentUser } from '../../redux/ducks/userLogin';


type RoleRouteProps = PropsWithChildren & {
  allowedRoles?: number[];
};

const RoleRoute: React.FC<RoleRouteProps> = ({ allowedRoles, children }) => {
  const { isLoggedIn, role_id } = useSelector(currentUser);


  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  if (allowedRoles && !allowedRoles.includes(role_id)) {
    return  <Navigate to={"/"} ></Navigate>
  }

  return <Suspense fallback={<SectionLoader />}>{children}</Suspense>;
};

export default RoleRoute;
