import React, { useMemo } from "react";
import { data_product_taking } from "../../data/products";
import { useTable } from "react-table";
import { COLUMNS } from "./column";

const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => data_product_taking, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <table {...getTableProps()} className={"taking_filter_table"}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            <input type="checkbox" />
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}> {column.render("Header")} </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              <input type="checkbox" />
              {row.cells.map((cell) => (
                <React.Fragment>
                  <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                </React.Fragment>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BasicTable;
