import { Container } from "@mui/material";
import React, { Fragment } from "react";
import Header from "./Header";

export default function MainLayout({ children }) {
  return (
    <Fragment>
      <Header />
      <Container>{children}</Container>
    </Fragment>
  );
}
