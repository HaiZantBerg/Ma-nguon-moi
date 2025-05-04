import axios from "axios";
import { ACCESS_TOKEN } from "@/data/constances";

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL,
});

axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.get(ACCESS_TOKEN);

        if (token) config.headers.Authorization = `Bearer ${token}`;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default axiosClient;
