import { TEmployee } from "./empoyees.types";

type TPaginationList = {
  page: number;
  limit: number;
  total: number;
  data: TEmployee[];
};

type TDataRequest = {
  page?: number;
  limit?: number;
  search: string;
};

export type { TPaginationList, TDataRequest };