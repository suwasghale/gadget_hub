interface BadgeProps {
  label: string;
  color?: "red" | "green" | "orange";
}

const ProductBadge = ({ label, color = "red" }: BadgeProps) => {
  const bgMap = {
    red: "bg-red-600",
    green: "bg-green-600",
    orange: "bg-orange-500",
  };

  return (
    <span
      className={`${bgMap[color]} text-white px-3 py-1 rounded-full text-xs font-bold`}
    >
      {label}
    </span>
  );
};

export default ProductBadge;
