import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import serviceConfig from "config/service";
import { ChangeStatusOrderModel, orderService } from "../api";

export const useListingOrder = (params: any) => {
  return useQuery({
    queryKey: ["listing-order", params],
    queryFn: () => orderService.listing(params),
    placeholderData: keepPreviousData,
  });
};

export const useChangeStatusOrder = () => {
  return useMutation({
    mutationKey: ["change-status-order"],
    mutationFn: (data: ChangeStatusOrderModel) =>
      orderService.change_status(data),
  });
};

export const useDetailOrder = (id: any) => {
  return useQuery({
    queryKey: ["detail-order", id],
    queryFn: () => orderService.detail(id),
    placeholderData: keepPreviousData,
  });
};
