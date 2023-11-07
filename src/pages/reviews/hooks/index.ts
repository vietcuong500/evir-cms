import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { reviewService } from "../api";

export const useListingReview = (params: any) => {
  return useQuery({
    queryKey: ["listing-review", params],
    queryFn: () => reviewService.listing(params),
    placeholderData: keepPreviousData,
  });
};
