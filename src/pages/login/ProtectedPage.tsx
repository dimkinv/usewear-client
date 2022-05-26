import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { setFromRoute } from "../../store/login/login.slice";
import { typedUseDispatch, typedUseSelector } from "../../store/store";

export const ProtectedPage: React.FC = ({ children }) => {
  const auth = typedUseSelector(store => store.loginStore);
  const dispatch = typedUseDispatch();
  const location = useLocation();

  if (!auth.accessToken) {
    dispatch(setFromRoute(location.pathname));
    return <Navigate to="/login" replace />
  }

  return (<>{children}</>);
}