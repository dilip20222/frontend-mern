import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const MainLayout = () => {
  let isAuth = localStorage.getItem('token');
  return (
    <>
      {!isAuth ? <Navigate to="/auth/login" /> : <Outlet/>}
    </>
  );
};

export default MainLayout;
