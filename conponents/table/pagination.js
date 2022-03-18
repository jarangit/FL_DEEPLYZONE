import React from "react";

const Pagination = ({
  limit,
  postsPerPage,
  totalPosts,
  paginate,
  current_page,
  dataSelect,
}) => {
  const pageNumber = [];

  for (let i = 0; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  const totalPage = Math.ceil(totalPosts / postsPerPage);
  console.log(dataSelect);

  return (
    <div className="expenses_pagination">
      <div>
        <button
          className={dataSelect.length !== 0 ? "jr_but_blue" : "jr_but_gray"}
        >
          ลบสินค้า
        </button>
      </div>
      <div className="expenses_pagination_bux_paginate">
        <button
          onClick={() => paginate(current_page != 1 ? current_page - 1 : 1)}
        >
          {"<"}
        </button>
        <span>{current_page}</span>
        {"/"}
        <span>{totalPage}</span>
        <button onClick={() => paginate(current_page + 1)}>{">"}</button>
      </div>
      <div>
        <label className="expenses_pagination_select">
          <select onChange={(e) => limit(e.target.value)}>
            <option value={25}>25 รายการ</option>
            <option value={50}>50 รายการ</option>
            <option value={75}>75 รายการ</option>
            <option value={100}>100 รายการ</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Pagination;
