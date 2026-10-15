
function Card({ title, description, image, children }) {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-lg">
      {image && (
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover"
        />
      )}

      <div className="p-5">
        <h2 className="mb-2 text-xl font-bold text-slate-800">
          {title}
        </h2>

        <p className="mb-4 text-slate-600">
          {description}
        </p>

        {children}
      </div>
    </div>
  );
}

export default Card;
