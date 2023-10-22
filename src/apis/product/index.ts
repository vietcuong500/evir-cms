import serviceConfig from "config/service";

const url = {
  listing: "/product/listing",
  create: "/product/create",
  update: "/product/update",
  delete: "/product/delete",
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

const updateProduct = (data: any) => {
  return serviceConfig.put(url.update, data).then((res) => res.data);
};

const deleteProduct = (id: number) => {
  return serviceConfig.delete(`${url.delete}/${id}`).then((res) => res.data);
};

const productService = {
  listingProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};

export default productService;
