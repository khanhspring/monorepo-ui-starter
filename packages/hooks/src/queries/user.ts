import {queryOptions, useQuery} from "@tanstack/react-query";
import {Page, Response, User} from "@repo/types";
import {api} from "../lib/api";

export const usersQueryOptions = () => {
  return queryOptions<Page<User>>({
    queryKey: ["users"],
    queryFn: () => api.users.list(),
  })
};

export const userQueryOptions = (id: string) => {
  return queryOptions<Response<User>>({
    queryKey: ["users", id],
    queryFn: () => api.users.getById(id),
    enabled: !!id,
  });
}

export function useUsers() {
  return useQuery<Page<User>>(usersQueryOptions());
}

export function useUser(id: string) {
  return useQuery<Response<User>>(userQueryOptions(id));
}
