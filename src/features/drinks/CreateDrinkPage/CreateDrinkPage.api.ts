import { MutationOptions, useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { mockServerUrl } from "../consts";

export const createDrink = (body: any) => {
  return axios.post(`${mockServerUrl}`, body);
};

export const useCreateDrink = (
  options?: Omit<
    MutationOptions<AxiosResponse, Error, { body: any }>,
    "mutationFn"
  >
) => {
  return useMutation({
    mutationFn: (variables) => createDrink(variables.body),
    ...options,
  });
};
