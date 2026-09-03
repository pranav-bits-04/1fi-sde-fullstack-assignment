const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function request(path) {
  const response = await fetch(`${API_URL}${path}`);
  const payload = await response.json();

  if (!response.ok) {
    throw new Error(payload.message || "Request failed");
  }

  return payload.data;
}

export const getProducts = () => request("/products");
export const getProduct = (slug) => request(`/products/${slug}`);
