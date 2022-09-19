import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import styled from "styled-components";

const LoginDiv = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  align-items: baseline;
  justify-items: center;
`;

const LoginButton = () => {
  const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0();
  useEffect(() => {
    //chequear si esta loading, si esta logeado y no esta loading fetch para ver si existe user.
    if (isLoading) return;
    if (isAuthenticated && !isLoading) {
      //fetch api check usuario existe o no.
      //if existe user
      //redirect a '/' home
      //else no existe el usuario
      //redirect a 'createUser'
    }
    //si existe user, redireccionar a home, si no existe redireccionar a formulario y ahi fetch etc
  }, [isLoading, isAuthenticated]);

  return (
    <LoginDiv>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3556/3556923.png"
          alt="logo"
        ></img>
      </div>
      <button onClick={() => loginWithRedirect()}>Login</button>
    </LoginDiv>
  );
};

export default LoginButton;
