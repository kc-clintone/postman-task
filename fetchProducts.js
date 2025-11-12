const PRODUCT_API = "https://0b348e0c-69af-4ca2-b539-a28fc92c5b05.mock.pstmn.io/products";

async function fetchAndFilterProducts({ minPrice, maxPrice, category, limit } = {}) {
  try {
    const data = await fetch(PRODUCT_API);
    if (!data.ok) throw new Error(`HTTP error! Status: ${res.status}`);

    let products = await data.json();

    if (minPrice !== undefined) products = products.filter(p => p.price >= minPrice);
    if (maxPrice !== undefined) products = products.filter(p => p.price <= maxPrice);
    if (category) products = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
    if (limit !== undefined) products = products.slice(0, limit);

    console.table(products)
    return products;

  } catch (err) {
    console.error("Failed to fetch products:", err);
  }
}

fetchAndFilterProducts({
  minPrice: 10000,
  maxPrice: 50000,
  category: "Accessories",
  limit: 3
});
