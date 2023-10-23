import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import categoryService from "../api";
import { CategoryModel } from "../types";

export const useListingCategory = (params: any) => {
  return useQuery({
    queryKey: ["listing-category", params],
    queryFn: () => categoryService.getCategories(params),
    placeholderData: keepPreviousData,
  });
};

export const useDetailCategory = (id: number) => {
  return useQuery({
    queryKey: ["detail-category", id],
    queryFn: () => categoryService.detailCategory(id),
    placeholderData: keepPreviousData,
  });
};

export const useCreateCategory = () => {
  return useMutation({
    mutationKey: ["create-category"],
    mutationFn: (data: CategoryModel) => categoryService.createCategory(data),
  });
};

export const useUpdateCategory = () => {
  return useMutation({
    mutationKey: ["update-category"],
    mutationFn: (data: { id: number; data: CategoryModel }) =>
      categoryService.updateCategory(data.id, data.data),
  });
};

export const useDeleteCategory = () => {
  return useMutation({
    mutationKey: ["delete-category"],
    mutationFn: (id: number) => categoryService.deleteCategory(id),
  });
};
