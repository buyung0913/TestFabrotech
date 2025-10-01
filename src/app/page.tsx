"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";
import ProductSort from "@/components/ProductSort";

export default function ProductListPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("asc");

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFiltered(data.products);
      });
  }, []);

  useEffect(() => {
    let items = [...products];
    if (category) {
      items = items.filter((p) => p.category === category);
    }
    items.sort((a, b) =>
      sort === "asc" ? a.price - b.price : b.price - a.price
    );
    setFiltered(items);
  }, [category, sort, products]);

  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="flex gap-4 mb-6">
        <ProductFilter
          categories={categories}
          selected={category}
          onChange={setCategory}
        />
        <ProductSort value={sort} onChange={setSort} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} {...p} thumbnail={p.thumbnail} />
        ))}
      </div>
    </main>
  );
}
