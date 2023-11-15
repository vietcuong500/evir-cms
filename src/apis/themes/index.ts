import serviceConfig from "config/service";

const url = {
  base: "/admin/page",
};

export const themeService = {
  create: (data: any) => {
    return serviceConfig.post(url.base, data).then((res) => res.data);
  },
  get: (id: number) => {
    return serviceConfig.get(`/page/${id}`).then((res) => res.data);
  },
  update: (id: number, data: any) => {
    return serviceConfig.put(`${url.base}/${id}`, data).then((res) => res.data);
  },
  listing: (params: any) => {
    return serviceConfig
      .get("/page", {
        params,
      })
      .then((res) => res.data);
  },
};
