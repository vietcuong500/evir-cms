import serviceConfig from "config/service";

const url = {
  listing: "/product/listing",
  create: "/product/create",
};

const listingProduct = (params: any) => {
  return serviceConfig
    .get(url.listing, {
      params,
    })
    .then((res) => res.data);
};

const createProduct = (data: any) => {
  return serviceConfig.post(url.create, data).then((res) => res.data);
};

const productService = {
  listingProduct,
  createProduct,
};

export default productService;
