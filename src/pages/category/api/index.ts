import serviceConfig from "config/service";
import { CategoryModel } from "../types";

const categoryUrl = {
  listing: "/blog-category",
  create: "/admin/blog-category",
};

const getCategories = (params: any) => {
  return serviceConfig
    .get(categoryUrl.listing, {
      params,
    })
    .then((res) => res.data);
};

const detailCategory = (id: number) => {
  return serviceConfig
    .get(`${categoryUrl.listing}/${id}`)
    .then((res) => res.data);
};

const createCategory = (data: CategoryModel) => {
  return serviceConfig.post(categoryUrl.create, data).then((res) => res.data);
};

const updateCategory = (id: number, data: CategoryModel) => {
  return serviceConfig
    .put(`${categoryUrl.create}/${id}`, data)
    .then((res) => res.data);
};

const deleteCategory = (id: number) => {
  return serviceConfig
    .delete(`${categoryUrl.create}/${id}`)
    .then((res) => res.data);
};

const categoryService = {
  getCategories,
  detailCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};

export default categoryService;
