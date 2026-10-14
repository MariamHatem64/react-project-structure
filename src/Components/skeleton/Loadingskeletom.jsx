
function LoadingSkeleton() {
  return (
    <div className="w-full max-w-sm animate-pulse rounded-xl border p-4">
      <div className="mb-4 h-40 rounded-lg bg-slate-200"></div>

      <div className="mb-3 h-4 w-3/4 rounded bg-slate-200"></div>

      <div className="h-4 w-1/2 rounded bg-slate-200"></div>
    </div>
  );
}

export default LoadingSkeleton;
