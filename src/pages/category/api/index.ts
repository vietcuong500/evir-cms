import serviceConfig from "config/service";

const categoryUrl = {
  listing: "/blog-category",
};

const getCategories = (params: any) => {
  return serviceConfig
    .get(categoryUrl.listing, {
      params,
    })
    .then((res) => res.data);
};

const categoryService = {
  getCategories,
};

export default categoryService;
