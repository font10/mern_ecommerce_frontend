import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const ProtectedRoute = ({ isAllowed, redirectTo }) => {
  const { token } = useSelector(state => state.auth)
  const location = useLocation();

  if(!isAllowed) return <Navigate to={redirectTo} />

  return (
    token ? <Outlet /> : <Navigate to={redirectTo} replace state={{ from: location }} />
  ) 
}

ProtectedRoute.propTypes = {
  redirectTo: PropTypes.node.isRequired,
  isAllowed: PropTypes.any,
};

ProtectedRoute.defaultProps = {
  redirectTo: '/login'
};