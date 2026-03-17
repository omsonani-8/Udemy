import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import Button from "./Button";
import { useEffect, useState } from "react";

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  filter?: string;
}

const TanStackTable = <T,>({ data, columns, filter }: TableProps<T>) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 2,
  });
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const time = setTimeout(() => {
      setGlobalFilter(filter ?? "");
      setLoading(false);
      setPagination((prev) => ({ ...prev, pageIndex: 0 }));
    }, 600);

    return () => {
      clearTimeout(time);
      setLoading(true);
    };
  }, [filter, data]);

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
      globalFilter,
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    globalFilterFn: "includesString",
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableSortingRemoval: false,
  });

  useEffect(() => {
    setPagination((prev) => ({ ...prev, pageIndex: 0 }));
  }, [data]);

  return (
    <div className="w-11/12 p-4 ml-[100px]">
      {table.getRowModel().rows.length === 0 ? (
        <p className="text-xl">No employee data available</p>
      ) : (
        <div className="w-11/12 p-4">
          <table className="w-full text-center border-2 border-collapse">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr className="bg-gray-300" key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      onClick={header.column.getToggleSortingHandler()}
                      className="border-2 p-2"
                      key={header.id}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: "▲",
                        desc: "▼",
                      }[header.column.getIsSorted() as string] ?? null}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {!loading &&
                table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="bg-white border-2">
                    {row.getVisibleCells().map((cell) => (
                      <td className="px-6 py-4 border-2" key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>

          <div className="flex justify-center items-center p-3 gap-7">
            <Button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="w-1/26 flex justify-center p-1 disabled:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed border-1 rounded-2xl"
            >
              {"<"}
            </Button>

            <span className="px-4 py-1 text-2xl">
              {table.getState().pagination.pageIndex + 1} . . . {table.getPageCount()}
            </span>

            <Button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="w-1/26 flex justify-center p-1 border-1 rounded-2xl disabled:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {">"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TanStackTable;
