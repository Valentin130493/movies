import React from "react";
import { Navigate } from "react-router-dom";
import { USER_TOKEN_NAMESPACE } from "../../constants/token";
import { ROUTES } from "../../constants/Routes";

interface AuthProps {
  children: JSX.Element;
}

const IsAuth: React.FC<AuthProps> = ({ children }) => {
  return !!localStorage.getItem(USER_TOKEN_NAMESPACE) ? (
    children
  ) : (
    <Navigate to={ROUTES.LOGIN} />
  );
};

export default IsAuth;
