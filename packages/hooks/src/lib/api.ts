import {APIClient} from "@repo/api-client";

let _api: APIClient | null = null;

export function setApiClient(api: APIClient) {
  console.log("setApiClient", api);
  _api = api;
}

export const api = new Proxy({} as APIClient, {
  get(target, prop) {
    if (!_api) {
      throw new Error("API client not initialized. Call setApiClient() first.");
    }
    return (_api as any)[prop];
  }
});