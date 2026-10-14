
function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <h2 className="text-xl font-bold text-slate-700">
        No Data Found
      </h2>

      <p className="mt-2 text-slate-500">There is nothing to display right now</p>
    </div>
  );
}

export default EmptyState;
