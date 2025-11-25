import { createAxios } from "./axios";
import {UserAPI} from "./user";
import {ProductAPI} from "./product";

type Options = {
  baseUrl: string;
  getAccessToken?: () => string | undefined;
  getApiKey?: () => string | undefined;
};

export class APIClient {
  users: UserAPI;
  products: ProductAPI;

  constructor(options: Options) {
    const axios = createAxios(options.baseUrl, options.getAccessToken, options.getApiKey);

    this.users = new UserAPI(axios);
    this.products = new ProductAPI(axios);
  }
}
