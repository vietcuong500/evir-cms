import serviceConfig from "config/service";

const url = {
  listing: "/category/listing",
  create: "/category/create",
  update: "/category/update",
  delete: "/category/delete",
};

const listingCollection = (params: any) => {
  return serviceConfig
    .get(url.listing, {
      params,
    })
    .then((res) => res.data);
};

const createCollection = (data: any) => {
  return serviceConfig.post(url.create, data).then((res) => res.data);
};

const updateCollection = (data: any) => {
  return serviceConfig.put(url.update, data).then((res) => res.data);
};

const deleteCollection = (id: number) => {
  return serviceConfig.delete(`${url.delete}/${id}`).then((res) => res.data);
};

const collectionService = {
  listingCollection,
  createCollection,
  updateCollection,
  deleteCollection,
};

export default collectionService;
