import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const MainLayout = () => {
  let isAuth = localStorage.getItem('token');
  let navigate = useNavigate()

  return (
    <>
      {!isAuth ? navigate("/auth/login") : <Outlet/>}
    </>
  );
};

export default MainLayout;
