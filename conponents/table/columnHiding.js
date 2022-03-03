import React, { useMemo } from "react";
import { data_product_taking } from "../../data/products";
import { useRowSelect, useTable } from "react-table";
import { COLUMNS } from "./column";
import {
  faCalendarAlt,
  faL,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ColumnHiding = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => data_product_taking, []);

  const {
    getTableProps,
    getTableBodyProps,
    getToggleAllRowsSelectedProps,
    getToggleHideAllColumnsProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    selectedFlatRows,
    state: { selectedRowIds },
  } = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "เลือก",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <label className="container_input">
              <input type={"checkbox"} {...getToggleAllRowsSelectedProps()} />
              <span className="checkmark"></span>
            </label>
          ),
          Cell: ({ row }) => (
            <label className="container_input">
              <input type={"checkbox"} {...row.getToggleRowSelectedProps()} />
              <span className="checkmark"></span>
            </label>
          ),
        },
        ...columns,
      ]);
    }
  );
  console.log(selectedFlatRows.map((d) => d.original));

  return (
    <div>
      <div className="taking_box_filter">
        <ul>
          <li className="taking_filter_item">
            <label className="container_input_text">
              เลือกทั้งหมด
              <input type="checkbox" {...getToggleHideAllColumnsProps()} />
              <span className="checkmark_left"></span>
            </label>
          </li>
          {allColumns.map((col) => (
            <li className="taking_filter_item">
              {console.log(col)}
              <label className="container_input_text">
                {typeof col.Header !== "function" ? col.Header : col.id}
                <input type="checkbox" {...col.getToggleHiddenProps()} />
                <span className="checkmark_left"></span>
              </label>
            </li>
          ))}
          <li className="taking_filter_item">
            <button className="jr_but_gray">ลบสินค้า</button>
          </li>
          <li className="taking_filter_item">
            <button
              style={{ fontSize: "16px" }}
              className="taking_filter_but_advance"
            >
              <span>
                <FontAwesomeIcon icon={faSliders} />
              </span>
              ค้าหาขั้นสูง
            </button>
          </li>
        </ul>
      </div>
      <table {...getTableProps()} className={"taking_filter_table"}>
        {console.log(rows)}
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <React.Fragment>
                    {console.log(row.isSelected)}
                    <td {...cell.getCellProps()}>
                      {cell.render("Cell")}
                      {cell.value === "pending" ? (
                        <div className="taking_table_status">
                          <div>
                            <button disabled={row.isSelected ? false : true}>
                              ข้อมูล
                            </button>
                          </div>
                          <div>
                            <button disabled={row.isSelected ? false : true}>
                              ลบ
                            </button>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </td>
                  </React.Fragment>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ColumnHiding;
