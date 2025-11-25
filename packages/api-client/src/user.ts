import {AxiosInstance} from "axios";
import {Page, Response, User} from "@repo/types";

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
}