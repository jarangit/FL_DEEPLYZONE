export const COLUMNS = [
  // {
  //   Header: "Id",
  //   accessor: "id",
  // },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
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
    Header: "Rate",
    accessor: "rate",
  },
  {
    Header: "Sales",
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
    Header: "Category",
    accessor: "category",
  },
  {
    Header: "Like",
    accessor: "like",
  },
  {
    Header: "Rate Review",
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
    Header: "Address",
    accessor: "address",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];
