import.meta.env.VITE_API_BASE_URL;
import.meta.env.VITE_API_KEY;

const BASE_URL= import.meta.env.VITE_API_BASE_URL;
const API_BASE_URL = BASE_URL;
const VITE_API_KEY = import.meta.env.VITE_API_KEY;
const API_KEY = VITE_API_KEY;

interface ApiResponse<T> {
  data: T;
}

const ApiService = {
  get: async <T>(
    endpoint: string,
    options?: RequestInit,
    queryParams?: Record<string, string | number>,
    signal?: AbortSignal
  ): Promise<ApiResponse<T>> => {
    let url = `${API_BASE_URL}${endpoint}?key=${API_KEY}`;
    if (queryParams) {
      const query = new URLSearchParams();
      for (const key in queryParams) {
        if (Object.prototype.hasOwnProperty.call(queryParams, key)) {
          query.append(key, queryParams[key].toString());
        }
      }
      url += `&${query.toString()}`;
    }
    try {
      const response = await fetch(url, { ...options, signal });
      const data = await response.json();
      return { data };
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },

  getById: async <T>(
    endpoint: string,
    id: string | number,
    options?: RequestInit,
    signal?: AbortSignal
  ): Promise<ApiResponse<T>> => {
    try {
      const response = await ApiService.get<T>(
        `${endpoint}/${id}`,
        options,
        undefined,
        signal
      );
      return response;
    } catch (error) {
      console.error(`Error fetching data for ID ${id}:`, error);
      throw error;
    }
  },
};

export default ApiService;