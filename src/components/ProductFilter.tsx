"use client";

type Props = {
  categories: string[];
  selected: string;
  onChange: (c: string) => void;
};

export default function ProductFilter({
  categories,
  selected,
  onChange,
}: Props) {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-lg p-2"
    >
      <option value="">All Categories</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}
