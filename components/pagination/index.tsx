import { css, styled } from "@/stitches.confjg";
import {
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Table } from "@tanstack/react-table";
import { Button } from "../button";

interface TablePaginationProps {
  table: Table<any>;
}

const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$2",
  flexWrap: "wrap",
});

const icon = css({
  height: "$5",
  width: "$5",
});

export const Pagination = ({ table }: TablePaginationProps) => (
  <Container>
    <Button
      onClick={() => table.setPageIndex(0)}
      disabled={!table.getCanPreviousPage()}
    >
      <ChevronDoubleLeftIcon className={icon()} />
    </Button>
    <Button
      onClick={() => table.previousPage()}
      disabled={!table.getCanPreviousPage()}
    >
      <ChevronLeftIcon className={icon()} />
    </Button>
    <Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
      <ChevronRightIcon className={icon()} />
    </Button>
    <Button
      onClick={() => table.setPageIndex(table.getPageCount() - 1)}
      disabled={!table.getCanNextPage()}
    >
      <ChevronDoubleRightIcon className={icon()} />
    </Button>
    <Container>
      <div>Page</div>
      <strong>
        {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
      </strong>
    </Container>
    <Container>
      | Go to page:
      <input
        type="number"
        defaultValue={table.getState().pagination.pageIndex + 1}
        onChange={(e) => {
          const page = e.target.value ? Number(e.target.value) - 1 : 0;
          table.setPageIndex(page);
        }}
      />
    </Container>
  </Container>
);
