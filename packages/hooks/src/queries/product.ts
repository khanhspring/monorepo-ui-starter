import {useQuery} from "@tanstack/react-query";
import {Page, Product, Response} from "@repo/types";
import {api} from "../lib";

export function useProducts() {
  return useQuery<Page<Product>>({
    queryKey: ["products"],
    queryFn: () => api.products.list(),
  });
}

export function useProduct(id: string) {
  return useQuery<Response<Product>>({
    queryKey: ["products", id],
    queryFn: () => api.products.getById(id),
    enabled: !!id,
  });
}
