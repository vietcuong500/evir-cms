import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { commentService } from "../api";

export const useListingComment = (params: any) => {
  return useQuery({
    queryKey: ["listing-comment", params],
    queryFn: () => commentService.listing(params),
    placeholderData: keepPreviousData,
  });
};

export const useDetailComment = (id: number) => {
  return useQuery({
    queryKey: ["detail-comment", id],
    queryFn: () => commentService.detail(id),
    placeholderData: keepPreviousData,
  });
};

export const useCreateComment = () => {
  return useMutation({
    mutationKey: ["create-comment"],
    mutationFn: (data: any) => commentService.create(data),
  });
};

export const useUpdateComment = () => {
  return useMutation({
    mutationKey: ["update-comment"],
    mutationFn: (data: { id: number; data: any }) =>
      commentService.update(data.id, data.data),
  });
};

export const useDeleteComment = () => {
  return useMutation({
    mutationKey: ["delete-comment"],
    mutationFn: (id: number) => commentService.delete(id),
  });
};
