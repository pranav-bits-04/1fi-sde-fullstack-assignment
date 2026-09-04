const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api";

export async function getProducts() {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const result = await response.json();
  return result.data;
}

export async function getProduct(slug) {
  const response = await fetch(`${API_URL}/products/${slug}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const result = await response.json();
  return result.data;
}