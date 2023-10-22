import serviceConfig from "config/service";

const postsUrl = {
  listing: "/blog-post",
  store: "/admin/blog-post",
};

const getBlogPost = (params: any) => {
  return serviceConfig
    .get(postsUrl.listing, {
      params,
    })
    .then((res) => res.data);
};

const postBlog = (data: any) => {
  return serviceConfig.post(postsUrl.store, data).then((res) => res.data);
};

const getDetail = (id: number) => {
  return serviceConfig.get(`${postsUrl.listing}/${id}`).then((res) => res.data);
};

const postsService = {
  getBlogPost,
  postBlog,
  getDetail,
};

export default postsService;
