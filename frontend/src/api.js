```js
const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://onefi-sde-fullstack-assignment.onrender.com/api";

export async function getProducts() {
  try {
    const response = await fetch(`${API_URL}/products`);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const result = await response.json();

    console.log("Products API response:", result);

    return result.data || [];
  } catch (error) {
    console.error("Products fetch error:", error);
    throw error;
  }
}

export async function getProduct(slug) {
  try {
    const response = await fetch(`${API_URL}/products/${slug}`);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const result = await response.json();

    console.log("Product API response:", result);

    return result.data;
  } catch (error) {
    console.error("Product fetch error:", error);
    throw error;
  }
}
```
