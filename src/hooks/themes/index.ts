import { useMutation, useQuery } from "@tanstack/react-query";
import { themeService } from "apis/themes";

export const useCreatePage = () => {
  return useMutation({
    mutationKey: ["create-page"],
    mutationFn: (data: any) => themeService.create(data),
  });
};

export const useUpdatePage = () => {
  return useMutation({
    mutationKey: ["update-page"],
    mutationFn: (data: any) => themeService.update(data.id, data.data),
  });
};

export const useDetailPage = (id: number) => {
  return useQuery({
    queryKey: ["detail-page", id],
    queryFn: () => themeService.get(id),
  });
};

export const useListingPage = (params: any) => {
  return useQuery({
    queryKey: ["listing-page", params],
    queryFn: () => themeService.listing(params),
  });
};
