import React from "react";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import StyledNavbar from "../components/StyledNavbar";

const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
