import { keepPreviousData, useQuery } from "@tanstack/react-query";
import categoryService from "../api";

export const useListingCategory = (params: any) => {
  return useQuery({
    queryKey: ["listing-category", params],
    queryFn: () => categoryService.getCategories(params),
    placeholderData: keepPreviousData,
  });
};
