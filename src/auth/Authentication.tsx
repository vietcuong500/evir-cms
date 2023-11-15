import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

function Authentication() {
  if (!Cookies.get("access_token")) return <Navigate to="/login" />;
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Authentication;
