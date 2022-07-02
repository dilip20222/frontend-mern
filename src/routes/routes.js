import { Navigate, useRoutes } from "react-router-dom";
import { Login, SingUp, NotFound, DashBoard, Profile } from "../pages/index";
import AuthLayout from "../AuthCom.js/AuthLayout";
import MainLayout from "../MainLayout/MainLayout";

const RoutesPath = () => {
  const isAuth = localStorage.getItem("token");
  let routes = useRoutes([
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { path: "/auth/login", element: <Login /> },
        { path: "/auth/signUp", element: <SingUp /> },
        { path: "*", element: <NotFound /> },
      ],
    },
    {
      path: "/user",
      element: isAuth ? <MainLayout /> : <Navigate to="/auth/login" />,
      children: [
        { path: "/user/homePage", element: <DashBoard /> },
        { path: "/user/profile", element: <Profile /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return routes;
};

export default RoutesPath;
