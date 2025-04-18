import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedLayout = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);

  // if (user === null) {
  //   return <Navigate to={"/login"} />;
  // }
  // return <Outlet />;

  return user === null ? <Navigate to={"/login"} /> : <Outlet />;
};

export default ProtectedLayout;
