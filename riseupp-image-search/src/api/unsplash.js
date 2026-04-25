import axios from "axios";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export const searchImages = async (query, page = 1) => {
  const response = await unsplashApi.get("/search/photos", {
    params: {
      query,
      page,
      per_page: 12,
    },
  });

  return response.data;
};
