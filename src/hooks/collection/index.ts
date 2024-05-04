import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { collectionService, productService } from "apis";

export const useListingCollection = (params: any) => {
  return useQuery({
    queryKey: ["listing-collection", params],
    queryFn: () => collectionService.listingCollection(params),
    placeholderData: keepPreviousData,
  });
};

export const useCreateCollection = () => {
  return useMutation({
    mutationKey: ["create-collection"],
    mutationFn: (data: any) => collectionService.createCollection(data),
  });
};

export const useUpdateCollection = () => {
  return useMutation({
    mutationKey: ["update-collection"],
    mutationFn: (data: any) => collectionService.updateCollection(data),
  });
};

export const useDeleteCollection = () => {
  return useMutation({
    mutationKey: ["delete-collection"],
    mutationFn: (id: number) => collectionService.deleteCollection(id),
  });
};
