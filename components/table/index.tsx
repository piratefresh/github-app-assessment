"use client";
import {
  Contributor,
  Contributors,
  ReposContributorsResponse,
} from "@/types/GithubTypes";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import Link from "next/link";
import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Avatar } from "../avatar";
import { getContributors } from "@/lib/contributors";
import { Pagination } from "../pagination";
import { icon, ItemsCenter, Td, Th, UserCell } from "./styles";

export const Table = ({
  users,
  pageCount,
}: {
  users: Contributors;
  pageCount: number;
}) => {
  const [data, setData] = React.useState(users);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    });

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const columnHelper = createColumnHelper<Contributor>();

  const columns = React.useMemo(
    () => [
      columnHelper.accessor("login", {
        header: () => "Username",
        cell: (info) => (
          <Link href={`/user/${info.getValue()}`} key={info.getValue()}>
            <UserCell>
              <Avatar
                rounded
                src={info.row.original.avatar_url as string}
                height={32}
                width={32}
                alt={`avatar of ${info.row.original.login}`}
              />
              {info.getValue()}
            </UserCell>
          </Link>
        ),
        footer: (info) => info.column.id,
      }),

      columnHelper.accessor("contributions", {
        header: () => "Contributions",
        cell: (info) => info.renderValue(),
        footer: (info) => info.column.id,
      }),
    ],
    [columnHelper]
  );

  const table = useReactTable({
    data,
    columns,
    pageCount: pageCount ?? -1,
    manualPagination: true,
    state: {
      sorting,
      pagination,
    },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  React.useEffect(() => {
    const fetchData = async () => {
      const contributors = await getContributors({
        owner: "facebook",
        repo: "react",
        page: pageIndex + 1,
      });

      setData(contributors);
    };

    fetchData();
  }, [pageIndex]);

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id}>
                  {header.isPlaceholder ? null : (
                    <ItemsCenter
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : "",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: <ChevronDownIcon className={icon()} />,
                        desc: <ChevronUpIcon className={icon()} />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </ItemsCenter>
                  )}
                </Th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination table={table} />
    </div>
  );
};
