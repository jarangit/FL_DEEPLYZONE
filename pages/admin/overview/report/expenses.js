import React, { useState, useEffect } from "react";
import Expenses_table from "../../../../conponents/table/expenses_table";
import { fake_data_table_overview } from "../../../../data/data_table_overview";
const Expenses_page = () => {
  const [data, setdata] = useState(fake_data_table_overview);
  function onSelect(e) {

    console.log(e.target.value);
    if (e.target.value != "") {
      const filter = fake_data_table_overview.filter((item) =>
        item.type.includes(e.target.value)
      );
      setdata(filter);
    } else {
      console.log("null");
      setdata(fake_data_table_overview);
    }
  }

  console.log(data);
  return (
    <div className="expenses_p">
      <p className="expenses_p_title">รายการโฆษณาทั้งหมด</p>
      <Expenses_table data={data} func_select={onSelect} />
    </div>
  );
};
Expenses_page.layout = "admin";

export default Expenses_page;
