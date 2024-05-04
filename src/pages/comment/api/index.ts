import serviceConfig from "config/service";

const commentUrl = {
  main: "/blog-comment",
};

export const commentService = {
  listing: (params: any) =>
    serviceConfig.get(commentUrl.main, { params }).then((res) => res.data),
  detail: (id: number) =>
    serviceConfig.get(`${commentUrl.main}/${id}`).then((res) => res.data),
  create: (data: any) => {
    return serviceConfig.post(commentUrl.main, data).then((res) => res.data);
  },
  update: (id: number, data: any) => {
    return serviceConfig
      .put(`${commentUrl.main}/${id}`, data)
      .then((res) => res.data);
  },
  delete: (id: number) => {
    return serviceConfig
      .delete(`${commentUrl.main}/${id}`)
      .then((res) => res.data);
  },
};
