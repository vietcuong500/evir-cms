import serviceConfig from "config/service";

const url = {
  listing: "/order/listing",
};

export const orderService = {
  listing: (params: any) => {
    return serviceConfig.get(url.listing, { params }).then((res) => res.data);
  },
};
