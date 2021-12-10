import { USER_TOKEN_NAMESPACE } from "../constants/token";
import { LocalStorage } from "./LocalStorage";

export const Http = {
  getHeaders: async (extraHeaders?: any) => {
    const token = await LocalStorage.get(USER_TOKEN_NAMESPACE);
    const defaultHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    return extraHeaders
      ? { ...defaultHeaders, ...extraHeaders }
      : defaultHeaders;
  },

  get: async (url: string, extraHeaders?: any) => {
    try {
      const headers = await Http.getHeaders();
      const response = await fetch(url, {
        method: "GET",
        headers,
      });

      if (headers["Content-Type"] === "application/json") {
        const responseData = await response.json();

        if (responseData.error || responseData.statusCode) {
          return Promise.reject(responseData);
        }

        return responseData;
      }

      return response;
    } catch (e) {
      console.log(e);
    }
  },

  post: async (url: string, body: any) => {
    try {
      const headers = await Http.getHeaders();
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers,
      });
      const responseData = await response.json();

      if (responseData.error || responseData.statusCode) {
        return Promise.reject(responseData);
      }

      return responseData;
    } catch (e) {
      console.log(e);
    }
  },

  patch: async (url: string, body: any) => {
    try {
      const headers = await Http.getHeaders();
      const response = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify(body),
        headers,
      });
      const responseData = await response.json();

      if (responseData.error || responseData.statusCode) {
        return Promise.reject(responseData);
      }

      return responseData;
    } catch (e) {
      console.log(e);
    }
  },

  put: async (url: string, body?: any) => {
    try {
      const headers = await Http.getHeaders();
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(body),
        headers,
      });
      const responseData = await response.json();

      if (responseData.error || responseData.statusCode) {
        return Promise.reject(responseData);
      }

      return responseData;
    } catch (e) {
      console.log(e);
    }
  },

  delete: async (url: string) => {
    try {
      const headers = await Http.getHeaders();
      await fetch(url, {
        method: "DELETE",
        headers,
      });
    } catch (e) {
      console.log(e);
    }
  },
};
