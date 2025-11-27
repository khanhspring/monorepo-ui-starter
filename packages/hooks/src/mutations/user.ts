import {useMutation} from "@tanstack/react-query";
import {CreateUserReq} from "@repo/types";
import {api} from "../lib";

export function useCreateUser() {
  return useMutation({
    mutationFn: (data: CreateUserReq) => api.users.create(data),
  })
}

