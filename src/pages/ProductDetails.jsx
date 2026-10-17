
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../api/ProducrApi";
import Navbar from "../Components/layout/Navbar";

export default function ProductDetails() {
  const { id } = useParams();

  const {
    data: product,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: Boolean(id),
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Link
          to="/"
          className="text-sm font-medium text-green-800 hover:underline"
        >
          ← Back to Products
        </Link>

        {isPending && (
          <div className="mt-8 animate-pulse rounded-xl bg-gray-100 p-10">
            Loading product details...
          </div>
        )}

        {isError && (
          <div role="alert" className="mt-8 rounded-xl bg-red-50 p-6">
            <p className="font-semibold text-red-700">
              Could not load this product.
            </p>
            <p className="mt-2 text-sm text-red-600">
              {error.message}
            </p>
            <button
              onClick={() => refetch()}
              className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-white"
            >
              Try Again
            </button>
          </div>
        )}

        {product && (
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="flex min-h-80 items-center justify-center rounded-2xl bg-gray-50 p-6">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="max-h-96 w-full object-contain"
              />
            </div>

            <section className="py-2">
              <p className="text-sm uppercase tracking-widest text-green-800">
                {product.category}
              </p>

              <h1 className="mt-3 text-3xl font-semibold">
                {product.title}
              </h1>

              <p className="mt-4 text-gray-600">
                {product.description}
              </p>

              <p className="mt-5 text-lg text-amber-600">
                ⭐ {product.rating} / 5
              </p>

              <p className="mt-4 text-3xl font-bold">
                ${product.price.toFixed(2)}
              </p>

              <p className="mt-3 text-sm text-gray-500">
                Brand: {product.brand || "Not specified"}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Availability: {product.availabilityStatus || "Unknown"}
              </p>

              {product.discountPercentage > 0 && (
                <p className="mt-2 text-sm font-medium text-green-700">
                  {product.discountPercentage}% discount
                </p>
              )}
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
