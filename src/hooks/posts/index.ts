import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { postsService } from "apis";

export const useListingPosts = (params: any) => {
  return useQuery({
    queryKey: ["listing-post", params],
    queryFn: () => postsService.getBlogPost(params),
    placeholderData: keepPreviousData,
  });
};

export const useStorePost = () => {
  return useMutation({
    mutationKey: ["store-post"],
    mutationFn: (data: any) => postsService.postBlog(data),
  });
};

export const useDetailPost = (id: number) => {
  return useQuery({
    queryKey: ["detail-post", id],
    queryFn: () => postsService.getDetail(id),
    placeholderData: keepPreviousData,
  });
};

export const useUpdatePost = () => {
  return useMutation({
    mutationKey: ["update-post"],
    mutationFn: (variant: { id: number; data: any }) => {
      return postsService.updatePost(variant.id, variant.data);
    },
  });
};

export const useDeletePost = () => {
  return useMutation({
    mutationKey: ["delete-post"],
    mutationFn: (id: number) => {
      return postsService.deletePost(id);
    },
  });
};
