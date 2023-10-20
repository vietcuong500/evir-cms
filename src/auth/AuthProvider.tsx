import React from "react";
import { Outlet } from "react-router-dom";

function AuthProvider(props: any) {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AuthProvider;
