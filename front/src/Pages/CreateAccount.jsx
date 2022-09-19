import React from "react";
import CreateAccount from "../components/CreateAccount/CreateAccount";
import { PageWrapper } from "../components/PageWrapper/PageWrapper";
import Nav from "../components/Nav/Nav";

export const AccountCreation = () => {
  return (
    <PageWrapper>
      <Nav />
      <CreateAccount />
    </PageWrapper>
  );
};
