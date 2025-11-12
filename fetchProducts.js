const PRODUCT_API = "https://0b348e0c-69af-4ca2-b539-a28fc92c5b05.mock.pstmn.io/products";

async function fetchAndFilterProducts() {
  try {
    const data = await fetch(PRODUCT_API);
    if (!data.ok) throw new Error(`HTTP error! Status: ${res.status}`);

    let products = await data.json();
    console.table(products)
    return products;

  } catch (err) {
    console.error("Failed to fetch products:", err);
  }
}

fetchAndFilterProducts();
