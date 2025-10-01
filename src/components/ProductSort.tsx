"use client";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function ProductSort({ value, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-lg p-2"
    >
      <option value="asc">Price: Low to High</option>
      <option value="desc">Price: High to Low</option>
    </select>
  );
}
