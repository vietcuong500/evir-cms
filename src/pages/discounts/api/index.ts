import serviceConfig from "config/service";
import { AddProductDiscountModel } from "../types";

const discountUrl = {
  listing: "/admin/discount-promotion",
  add_product: "/admin/discount-promotion/add-product",
  remove_product: "/admin/discount-promotion/remove-product",
};

export const discountService = {
  listing: (params: any) =>
    serviceConfig
      .get(discountUrl.listing, {
        params,
      })
      .then((res) => res.data),
  create: (data: any) =>
    serviceConfig.post(discountUrl.listing, data).then((res) => res.data),
  update: (id: number, data: any) =>
    serviceConfig
      .put(`${discountUrl.listing}/${id}`, data)
      .then((res) => res.data),
  detail: (id: number) =>
    serviceConfig.get(`${discountUrl.listing}/${id}`).then((res) => res.data),
  delete: (id: number) =>
    serviceConfig
      .delete(`${discountUrl.listing}/${id}`)
      .then((res) => res.data),
  add_product: (data: AddProductDiscountModel) =>
    serviceConfig.post(discountUrl.add_product, data).then((res) => res.data),
  remove_product: (data: AddProductDiscountModel) =>
    serviceConfig
      .post(discountUrl.remove_product, data)
      .then((res) => res.data),
  add_multi_product: (product_ids: number[], discount_id: number) =>
    Promise.all(
      product_ids.map((id: number) =>
        serviceConfig
          .post(discountUrl.add_product, {
            product_id: id,
            discount_id,
          })
          .then((res) => ({
            ...res.data,
            data: {
              product_id: id,
            },
          }))
      )
    ),
};
