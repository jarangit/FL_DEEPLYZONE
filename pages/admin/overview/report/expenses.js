import React, { useState, useEffect } from "react";
import Expenses_table from "../../../../conponents/table/expenses_table";
import Pagination from "../../../../conponents/table/pagination";
import { fake_data_table_overview } from "../../../../data/data_table_overview";
const Expenses_page = () => {
  const [data, setdata] = useState(fake_data_table_overview);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  console.log({"currP": currentPage});
  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //CHANGE LIMIT DATA
  const limit = (limitNum) => setpostsPerPage(limitNum)
  function onSelect(e) {
    if (e.target.value != "") {
      const filter = fake_data_table_overview.filter((item) =>
        item.type.includes(e.target.value)
      );
      setdata(filter);
    } else {
      setdata(fake_data_table_overview);
    }
  }

  console.log(data);
  return (
    <div className="expenses_p">
      <p className="expenses_p_title">รายการโฆษณาทั้งหมด</p>
      <Expenses_table data={currentPosts} func_select={onSelect} />
      <Pagination
        limit = {limit}
        paginate={paginate}
        postsPerPage={postsPerPage}
        totalPosts={fake_data_table_overview.length}
        current_page={currentPage}
      />
    </div>
  );
};
Expenses_page.layout = "admin";

export default Expenses_page;
