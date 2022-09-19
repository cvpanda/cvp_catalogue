//inputs
//Logo
//Chequeo de inputs
//Login -> conectar a base
//Signup -> conectar a base

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { useLocation } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import LoginButton from "../components/HomePageLogin/Login";
import { LogoutButton } from "../components/HomePageLogin/Logout";
import { Profile } from "../components/HomePageLogin/Profile";
import styled from "styled-components";

const Loginpage = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  align-items: baseline;
  justify-items: center;
`;

export const Login = () => {
  const { isAuthenticated } = useAuth0();
  // const location = useLocation();
  return (
    <Loginpage>
      {isAuthenticated ? (
        <>
          <Profile />
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </Loginpage>
  );
};
