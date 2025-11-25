import {AxiosInstance} from "axios";
import {Page, Product, Response} from "@repo/types";

export class ProductAPI {
  constructor(private axios: AxiosInstance) {}

  async list(): Promise<Page<Product>> {
    const res = await this.axios.get("/api/products");
    return res.data;
  }

  async getById(id: string): Promise<Response<Product>> {
    const res = await this.axios.get(`/api/products/${id}`);
    return res.data;
  }
}