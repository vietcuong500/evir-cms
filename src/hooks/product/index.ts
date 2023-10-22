import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { productService } from "apis";

export const useListingProduct = (params: any) => {
  return useQuery({
    queryKey: ["listing-product", params],
    queryFn: () => productService.listingProduct(params),
    placeholderData: keepPreviousData,
  });
};

export const useCreateProduct = () => {
  return useMutation({
    mutationKey: ["create-product"],
    mutationFn: (data: any) => productService.createProduct(data),
  });
};

export const useUpdateProduct = () => {
  return useMutation({
    mutationKey: ["update-product"],
    mutationFn: (data: any) => productService.updateProduct(data),
  });
};

export const useDeleteProduct = () => {
  return useMutation({
    mutationKey: ["delete-product"],
    mutationFn: (id: number) => productService.deleteProduct(id),
  });
};
