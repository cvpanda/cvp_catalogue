import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavDiv = styled.div`
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Nav = (props) => {
  const NavItem = (props) => {
    return (
      <Link to={props.route}>
        <h2>{props.title}</h2>
      </Link>
    );
  };

  const mapNavItems = (array) => {
    let rutas = array.map((ruta) => {
      return (
        <NavItem
          title={ruta}
          route={ruta !== "Home" ? `/${ruta}/${props.empresa}` : "/"}
        />
      );
    });
    return rutas;
  };

  return (
    <div>
      <NavDiv>{mapNavItems(["Home", "User", "Otracosa"])} </NavDiv>
      {props.children}
      pepe
    </div>
  );
};

export default Nav;
