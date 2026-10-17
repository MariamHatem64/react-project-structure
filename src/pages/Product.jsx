
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useOutletContext } from "react-router-dom";

import { getProducts } from "../api/ProducrApi";
import Card from "../Components/ui/Card";

const LIMIT = 10;

export default function Product() {
  const { search } = useOutletContext();
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [search]);

  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["products", search, page],
    queryFn: () =>
      getProducts({
        query: search,
        limit: LIMIT,
        skip: page * LIMIT,
      }),
    placeholderData: (previousData) => previousData,
  });

  const products = data?.products ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.ceil(total / LIMIT);

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <section className="relative mb-6 overflow-hidden rounded-2xl border border-gray-100 bg-[#fafafa] px-5 py-8 sm:px-10 sm:py-12">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-green-800">
            Discover our collection
          </p>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Explore Our Shop
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
            Discover your favorite products and explore a collection
            selected just for you.
          </p>
        </section>

        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-xl font-semibold">
            {search ? "Search Results" : "All Products"}
          </h2>

          {data && (
            <p className="text-sm text-gray-500">
              {total} products
            </p>
          )}
        </div>

        {isPending && (
          <div
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
            aria-label="Loading products"
          >
            {Array.from({ length: LIMIT }).map((_, index) => (
              <div
                key={index}
                className="h-64 animate-pulse rounded-xl bg-gray-100"
              />
            ))}
          </div>
        )}

        {isError && (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 p-6 text-center"
          >
            <p className="font-semibold text-red-700">
              Could not load products.
            </p>

            <p className="mt-2 text-sm text-red-600">
              {error.message}
            </p>

            <button
              type="button"
              onClick={() => refetch()}
              className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        )}

        {!isPending && !isError && products.length === 0 && (
          <div className="rounded-xl bg-gray-50 px-4 py-12 text-center">
            <h3 className="font-semibold text-gray-800">
              No products found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Try another keyword.
            </p>
          </div>
        )}

        {!isPending && !isError && products.length > 0 && (
          <>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
              {products.map((product) => (
                <Card
                  key={product.id}
                  title={product.title}
                  image={product.thumbnail}
                  category={product.category}
                  rating={product.rating}
                  price={product.price}
                  className="h-full"
                >
                  <Link
                    to={`/products/${product.id}`}
                    className="block text-center text-sm font-semibold text-green-800 hover:underline"
                  >
                    View Details
                  </Link>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                disabled={page === 0}
                onClick={() => {
                  setPage((current) => current - 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="rounded-lg border px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous
              </button>

              <span className="text-sm text-gray-600">
                Page {page + 1} of {Math.max(totalPages, 1)}
              </span>

              <button
                type="button"
                disabled={page + 1 >= totalPages}
                onClick={() => {
                  setPage((current) => current + 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="rounded-lg border px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
