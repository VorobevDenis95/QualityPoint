import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";
import { TEmployee } from "../types/empoyees.types"; 
import { TDataRequest, TPaginationList } from "../types/api.types";

const api = axios.create({
  baseURL: "https://backend-test-myf3.onrender.com",
});

export function useEmployees({ page, limit, search }: TDataRequest) {
  return useSuspenseQuery<TPaginationList, Error>({
    queryKey: ["employees", { page, limit, search }],
    queryFn: () =>
      api
        .get("/employees", {
          params: {
            page: page || 1,
            limit: limit || 10,
            search: search || "",
          },
        })
        .then((res) => res.data),
  });
}

export const useEmployeeId = (id: string) => {
  return useQuery<TEmployee, Error>({
    queryKey: ["employee", id],
    queryFn: async () => {
      const response = await api.get(`/employees/${id}`);
      return response.data;
    },
  });
};

export const useImageBase64 = (url: string) => {
  return useQuery<string, Error>({
    queryKey: ["image", url],
    queryFn: async () => {
      const response = await axios.get(url, { responseType: "blob" });
      const blob = response.data;
      const reader = new FileReader();

      return new Promise<string>((resolve, reject) => {
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(blob);
      });
    },
  });
};

