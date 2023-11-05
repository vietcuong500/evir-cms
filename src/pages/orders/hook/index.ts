import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { orderService } from "../api";

export const useListingOrder = (params: any) => {
  return useQuery({
    queryKey: ["listing-order", params],
    queryFn: () => orderService.listing(params),
    placeholderData: keepPreviousData,
  });
};
