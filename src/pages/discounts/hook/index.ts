import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { discountService } from "../api";
import { AddProductDiscountModel } from "../types";

export const useListingDiscount = (params: any) => {
  return useQuery({
    queryKey: ["listing-discount", params],
    queryFn: () => discountService.listing(params),
    placeholderData: keepPreviousData,
  });
};

export const useDetailDiscount = (id: number) => {
  return useQuery({
    queryKey: ["detail-discount", id],
    queryFn: () => discountService.detail(id),
    placeholderData: keepPreviousData,
  });
};

export const useCreateDiscount = () => {
  return useMutation({
    mutationKey: ["discount-create"],
    mutationFn: (data: any) => discountService.create(data),
  });
};

export const useUpdateDiscount = () => {
  return useMutation({
    mutationKey: ["discount-update"],
    mutationFn: ({ id, data }: { id: number; data: any }) =>
      discountService.update(id, data),
  });
};

export const useDeleteDiscount = () => {
  return useMutation({
    mutationKey: ["discount-delete"],
    mutationFn: (id: number) => discountService.delete(id),
  });
};

export const useAddProductToDiscount = () => {
  return useMutation({
    mutationKey: ["add-product-to-discount"],
    mutationFn: (data: AddProductDiscountModel) =>
      discountService.add_product(data),
  });
};

export const useRemoveProductToDiscount = () => {
  return useMutation({
    mutationKey: ["reomve-product-to-discount"],
    mutationFn: (data: AddProductDiscountModel) =>
      discountService.remove_product(data),
  });
};

export const useAddMultiProductDiscount = () => {
  return useMutation({
    mutationKey: ["add-multi-product-discount"],
    mutationFn: (data: any) =>
      discountService.add_multi_product(data.product_ids, data.discount_id),
  });
};

export const useListingProductDiscount = (discount_id: any, params: any) => {
  return useQuery({
    queryKey: ["listing-discount-product", discount_id, params],
    queryFn: () => discountService.listing_product(discount_id, params),
    placeholderData: keepPreviousData,
    enabled: !!discount_id,
  });
};
