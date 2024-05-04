import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { userService } from "../api";

export const useListingUser = (params: any) => {
  return useQuery({
    queryKey: ["listing-user", params],
    queryFn: () => userService.listing(params),
    placeholderData: keepPreviousData,
  });
};
