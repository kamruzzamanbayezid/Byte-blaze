import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import Loading from "../Loading/Loading";

const PrivateRoute = ({ children }) => {

      const { user, loading } = useContext(AuthContext);
      const location = useLocation();

      if (loading) {
            return <Loading />
      }

      if (user) {
            return children;
      }

      return <Navigate to='/login' state={location?.pathname}></Navigate>;
};

PrivateRoute.propTypes = {
      children: PropTypes.node
};

export default PrivateRoute;