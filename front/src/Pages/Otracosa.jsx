import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav/Nav";

export const Otracosa = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Nav empresa={"nahuelEnterprise"}>
      <div>otracosa</div>
    </Nav>
  );
};
