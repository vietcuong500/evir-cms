import serviceConfig from "config/service";

const url = {
  listing: "/admin/review",
};

export const reviewService = {
  listing: (params: any) => {
    return serviceConfig.get(url.listing, { params }).then((res) => res.data);
  },
  remove: (id: number) => {
    return serviceConfig.delete(`/review/${id}`).then((res) => res.data);
  },
};
