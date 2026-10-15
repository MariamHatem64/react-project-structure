function Table({ columns, data, striped = false }) {
  return (
    <div className="my-8 w-full overflow-x-auto rounded-xl shadow-md">
      <table className="w-full border-collapse bg-white text-left">
        <thead className="bg-sky-500 text-white">
          <tr>
            {columns.map((column) => (
              <th key={column} className="px-5 py-3">
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={
                striped && index % 2 === 0
                  ? "bg-sky-50"
                  : "bg-white"
              }
            >
              {columns.map((column) => (
                <td key={column} className="border-b px-5 py-3">
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
