"use client";

import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

export default function ProductCard({
  id,
  title,
  description,
  price,
  thumbnail,
}: ProductCardProps) {
  return (
    <Link href={`/products/${id}`}>
      <div className="rounded-2xl shadow-md p-4 hover:shadow-lg transition">
        <Image
          src={thumbnail}
          alt={title}
          width={300}
          height={200}
          className="rounded-xl object-cover"
          priority={false}
        />
        <h2 className="text-lg font-semibold mt-2">{title}</h2>
        <p className="text-sm text-gray-500 truncate">{description}</p>
        <p className="text-blue-600 font-bold mt-1">${price}</p>
      </div>
    </Link>
  );
}
