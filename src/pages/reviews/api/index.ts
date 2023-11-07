import serviceConfig from "config/service";

const url = {
  listing: "/review",
};

export const reviewService = {
  listing: (params: any) => {
    return serviceConfig.get(url.listing, { params }).then((res) => res.data);
  },
};
