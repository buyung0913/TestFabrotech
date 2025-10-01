import Link from "next/link";
import { fetchProductById } from "@/utils/api";
import ProductCarousel from "@/components/ProductCarousel";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await fetchProductById(id);

  return (
    <main className="p-6 max-w-2xl mx-auto">
      {/* Button Back */}
      <Link
        href="/"
        className="inline-block mb-4 px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium cursor-pointer"
      >
        ← Back to Products
      </Link>

      {/* Title */}
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-lg font-semibold mt-2">${product.price}</p>

      {/* Availability Badge */}
      <span
        className={`px-3 py-1 rounded-full text-white text-sm mt-2 inline-block
    ${
      product.availabilityStatus === "In Stock"
        ? "bg-green-500"
        : product.availabilityStatus === "Low Stock"
        ? "bg-yellow-500"
        : "bg-red-500"
    }`}
      >
        {product.availabilityStatus === "In Stock"
          ? "Available"
          : product.availabilityStatus === "Low Stock"
          ? "Low Stock"
          : "Out of Stock"}
      </span>

      {/* Carousel */}
      <div className="mt-6">
        <ProductCarousel images={product.images} title={product.title} />
      </div>
    </main>
  );
}
