const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://onefi-sde-fullstack-assignment.onrender.com/api";

export async function getProducts() {
  const response = await fetch(`${API_URL}/products`, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  const result = await response.json();

  console.log("Products API response:", result);

  return result.data || [];
}

export async function getProduct(slug) {
  const response = await fetch(`${API_URL}/products/${slug}`, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch product: ${response.status}`);
  }

  const result = await response.json();

  console.log("Product API response:", result);

  return result.data;
}