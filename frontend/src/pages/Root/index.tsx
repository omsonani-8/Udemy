import type React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constant/routesPath";
import { useSelector } from "react-redux";
import { currentUser } from "../../redux/ducks/userLogin";
import { useEffect } from "react";

const Root: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn, role_id } = useSelector(currentUser);

  useEffect(() => {
    if (isLoggedIn) {
      if (role_id === 1) {
        navigate(ROUTES.ADMIN_DASHBOARD.path);
      } else if (role_id === 2) {
        navigate(ROUTES.INSTRUCTOR_DASHBOARD.path);
      } else if (role_id === 3) {
        navigate(ROUTES.STUDENT_DASHBOARD.path);
      }
    }
  }, [isLoggedIn, role_id, navigate]);

  return (
    <div>
      <h1>Landing page</h1>
    </div>
  );
};

export default Root;
