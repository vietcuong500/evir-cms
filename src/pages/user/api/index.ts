import serviceConfig from "config/service";

const url = {
  listing: "/admin/user",
};

export const userService = {
  listing: (params: any) => {
    return serviceConfig.get(url.listing, { params }).then((res) => res.data);
  },
};
