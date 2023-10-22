import { Spin } from "antd";
import { useInfo } from "hooks/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const UserContxet = createContext({} as any);

function AuthProvider(props: any) {
  const [user, setUser] = useState<any>(null);
  const { data, isSuccess, isLoading } = useInfo();

  useEffect(() => {
    if (isSuccess) {
      if (data.code === 200) {
        setUser(data.data);
      }
    }
  }, [isSuccess]);
  return (
    <UserContxet.Provider value={{ user, setUser }}>
      {isLoading ? <Spin /> : <Outlet />}
    </UserContxet.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => useContext(UserContxet);
