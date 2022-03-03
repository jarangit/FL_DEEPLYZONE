import React from "react";

export const COLUMNS = [
  // {
  //   Header: "Id",
  //   accessor: "id",
  // },
  {
    Header: "ชื่อสินค้า",
    accessor: "name",
  },
  {
    Header: "ราคาสินค้า",
    accessor: (data) => (
      <div>
        {data.price}
        <div
          style={{
            color: `${data.price_rate >= 0 ? "#31e500" : "red"}`,
          }}
          className="price_change"
        >
          [<span>{data.price_rate >= 0 ? "+" : ""}</span>
          {data.price_rate}%]
        </div>
      </div>
    ),
  },
  // {
  //   Header: "Price Rate",
  //   accessor: "price_rate",
  // },
  {
    Header: "คะแนนสินค้า",
    accessor: "rate",
  },
  {
    Header: "ยอดขาย",
    accessor: (data) => (
      <div>
        {data.sales}
        <div
          style={{
            color: `${data.sales_rate >= 0 ? "#31e500" : "red"}`,
          }}
          className="price_change"
        >
          [<span>{data.sales_rate >= 0 ? "+" : ""}</span>
          {data.sales_rate}%]
        </div>
      </div>
    ),
  },
  // {
  //   Header: "Sales Rate",
  //   accessor: "sales_rate",
  // },
  {
    Header: "หมวดหมู้สินค้า",
    accessor: "category",
  },
  {
    Header: "การกดถูกใจ",
    accessor: "like",
  },
  {
    Header: "คะแนนรีวิว",
    accessor: (data) =>
      data.rate_review.map((item, key) => (
        <div key={key} className="taking_table_review">
          <p>{item.star}</p>
          <p>ดาว</p>
          <p>{item.socre}</p>
        </div>
      )),
  },
  {
    Header: "ที่ต้องร้านค้า",
    accessor: "address",
  },
  {
    Header: "สถานะ",
    accessor: "status"
  },
];
