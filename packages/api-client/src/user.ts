import {AxiosInstance} from "axios";
import {CreateUserReq, IdRes, Page, Response, User} from "@repo/types";

export class UserAPI {
  constructor(private axios: AxiosInstance) {}

  async list(): Promise<Page<User>> {
    const res = await this.axios.get("/api/users");
    return res.data;
  }

  async getById(id: string): Promise<Response<User>> {
    const res = await this.axios.get(`/api/users/${id}`);
    return res.data;
  }

  async create(data: CreateUserReq): Promise<IdRes<number>> {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    return { id: Math.floor(Math.random() * 1000) + 1 }; // Simulate ID generation
  }
}