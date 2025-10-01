export const fetchProducts = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=100", {
    cache: "force-cache",
    next: { revalidate: 60 },
  });
  return res.json();
};

export const fetchProductById = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "force-cache",
    next: { revalidate: 60 },
  });
  return res.json();
};
