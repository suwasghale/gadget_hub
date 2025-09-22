import { Star } from "lucide-react";

interface RatingProps {
  rating: number;
  reviewCount?: number;
}

const ProductRating = ({ rating, reviewCount }: RatingProps) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating)
                ? "text-yellow-400 fill-current"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      {reviewCount && (
        <span className="text-sm text-gray-500">({reviewCount})</span>
      )}
    </div>
  );
};

export default ProductRating;
