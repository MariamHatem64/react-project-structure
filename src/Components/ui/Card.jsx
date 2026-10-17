
function Card({
  title,
  description,
  image,
  children,
  price,
  rating,
  category,
  className = "",
}) {
  return (
    <div
      className={`group w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      {image && (
        <div className="flex h-48 items-center justify-center overflow-hidden bg-gray-50 p-4">
          <img
            src={image}
            alt={title || "Product image"}
            loading="lazy"
            className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-4 sm:p-5">
        {category && (
          <p className="mb-2 text-xs uppercase tracking-wide text-gray-400">
            {category}
          </p>
        )}

        {title && (
          <h2 className="mb-2 line-clamp-2 text-base font-semibold text-gray-800">
            {title}
          </h2>
        )}

        {description && (
          <p className="mb-3 line-clamp-2 text-sm leading-6 text-gray-500">
            {description}
          </p>
        )}

        <div className="flex items-center justify-between gap-2">
          {price !== undefined && price !== null && (
            <p className="font-semibold text-gray-900">
              ${Number(price).toFixed(2)}
            </p>
          )}

          {rating !== undefined && rating !== null && (
            <p className="text-sm text-amber-600">
              ⭐ {rating}
            </p>
          )}
        </div>

        {children && (
          <div className="mt-4">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
