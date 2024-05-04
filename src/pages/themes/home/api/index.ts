import { useMutation, useQuery } from "@tanstack/react-query";
import serviceConfig from "config/service";

export const homePageService = {
  update: (data: any) => {
    return serviceConfig
      .put("/admin/home/update-config", data)
      .then((res) => res.data);
  },
  get: () => {
    return serviceConfig.get("/home/get-config").then((res) => res.data);
  },
};

export const useUpdateHomeConfig = () => {
  return useMutation({
    mutationKey: ["config-home-page"],
    mutationFn: (data: any) => homePageService.update(data),
  });
};

export const useGetHomeConfig = () => {
  return useQuery({
    queryKey: ["get-config-home"],
    queryFn: () => homePageService.get(),
  });
};
