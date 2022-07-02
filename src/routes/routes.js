import { useRoutes } from "react-router-dom";
import { Login, SingUp, NotFound, DashBoard, Profile } from "../pages/index";
import AuthLayout from "../AuthCom.js/AuthLayout";
import MainLayout from "../MainLayout/MainLayout";

const RoutesPath = () => {
  let routes = useRoutes([
    {
      path: "auth",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signUp", element: <SingUp /> },
        { path: "*", element: <NotFound /> },
      ],
    },
    {
      path: "",
      element: <MainLayout />,
      children: [
        { path: "/", element: <DashBoard /> },
        { path: "profile", element: <Profile /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return routes;
};

export default RoutesPath;
