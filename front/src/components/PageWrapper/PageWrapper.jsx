import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

export const PageWrapper = (props) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const history = useNavigate();

  useEffect(() => {
    if (isLoading) return;
    if (!isAuthenticated) history("/");
  }, [isAuthenticated, isLoading, history]);

  if (isLoading && !isAuthenticated) {
    return <div>Loading..</div>;
  }

  return <>{props.children}</>;
};
