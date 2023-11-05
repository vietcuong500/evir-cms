import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import {
  IDataTranslate,
  IParamsTranslate,
  translateService,
} from "apis/translate";

export const useAddLanguage = () => {
  return useMutation({
    mutationKey: ["add-language"],
    mutationFn: (data: IDataTranslate) => translateService.addLanguage(data),
  });
};

export const useGetLanguage = (params: IParamsTranslate) => {
  return useQuery({
    queryKey: ["get-language", params],
    queryFn: () => translateService.getLanguage(params),
    placeholderData: keepPreviousData,
  });
};
