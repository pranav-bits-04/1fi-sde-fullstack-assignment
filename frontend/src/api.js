const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://onefi-sde-fullstack-assignment.onrender.com/api";

export async function getProducts() {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const result = await response.json();

  console.log("Products API response:", result);

  return result.data || [];
}

export async function getProduct(slug) {
  const response = await fetch(`${API_URL}/products/${slug}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const result = await response.json();

  console.log("Product API response:", result);

  return result.data;
}
