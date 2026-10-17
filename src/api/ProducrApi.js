
const BASE_URL = "https://dummyjson.com/products";

export async function getProducts({ query, limit, skip }) {
  const url = query.trim()
    ? `${BASE_URL}/search?q=${encodeURIComponent(query)}&limit=${limit}&skip=${skip}`
    : `${BASE_URL}?limit=${limit}&skip=${skip}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export async function getProductById(id) {
  const response = await fetch(`${BASE_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product details");
  }

  return response.json();
}
