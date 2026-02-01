import axios from "axios";

/* =========================
   AXIOS INSTANCE
========================= */
const apiUrl = process.env.REACT_APP_APIBASE_URL;


const api = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

/* =========================
   INTERCEPTORS
========================= */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * 🔥 CENTRALIZED SUCCESS / FAILURE HANDLING
 */
api.interceptors.response.use(
  (response) => {
    // HTTP 2xx → SUCCESS
    return {
      success: true,
      status: response.status,
      data: response.data,
      message: response.data?.message || "Request successful",
    };
  },
  (error) => {
    // HTTP 4xx / 5xx → FAILURE
    return Promise.resolve({
      success: false,
      status: error.response?.status || 500,
      data: null,
      message:
        error.response?.data?.message ||
        error.message ||
        "Something went wrong",
    });
  }
);

/* =========================
   COMMON METHODS
========================= */
export const GET = (url, params = {}) => api.get(url, { params });
export const POST = (url, data = {}) => api.post(url, data);
export const PUT = (url, data = {}) => api.put(url, data);
export const DELETE = (url) => api.delete(url);

/* =========================
   FORM DATA
========================= */
export const POST_FORMDATA = (url, formData) =>
  api.post(url, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export default api;
