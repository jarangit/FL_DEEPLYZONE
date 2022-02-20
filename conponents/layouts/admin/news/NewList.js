import React from "react";
import NewItem from "./NewItem";

const NewList = () => {
  const data_newList = [
    {
      name: "Cryptocurrency Market news: $130 billion",
      thumbnail:
        "https://phantom-marca.unidadeditorial.es/d3a32cde0dd6ccfba4ee1fa78ed7540b/resize/1320/f/jpg/assets/multimedia/imagenes/2022/01/24/16430648159392.jpg",
    },
    {
      name: "Cryptocurrency Market news: $130 billion",
      thumbnail:
        "https://phantom-marca.unidadeditorial.es/d3a32cde0dd6ccfba4ee1fa78ed7540b/resize/1320/f/jpg/assets/multimedia/imagenes/2022/01/24/16430648159392.jpg",
    },
    {
      name: "Cryptocurrency Market news: $130 billion",
      thumbnail:
        "https://phantom-marca.unidadeditorial.es/d3a32cde0dd6ccfba4ee1fa78ed7540b/resize/1320/f/jpg/assets/multimedia/imagenes/2022/01/24/16430648159392.jpg",
    },
    {
      name: "Cryptocurrency Market news: $130 billion",
      thumbnail:
        "https://phantom-marca.unidadeditorial.es/d3a32cde0dd6ccfba4ee1fa78ed7540b/resize/1320/f/jpg/assets/multimedia/imagenes/2022/01/24/16430648159392.jpg",
    },
  ];
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>News</h2>
      <div className="news_list">
        {data_newList.map((item, key) => (
          <NewItem key={key} name={item.name} thumbnail={item.thumbnail} />
        ))}
      </div>

      <div className="news_pop">
        <div className="new_pop_box_img">
          <img
            src="https://i0.wp.com/www.indiaretailing.com/wp-content/uploads/2021/08/ONDC-1-1.jpg?fit=681%2C400&ssl=1"
            alt=""
            className="news_pop_img"
          />
        </div>
        <div className="news_pop_content">
          <strong>
            Festive push: E-Commerce sales likely to touch $4.8 billion GMV in
            the first week of festive sale
          </strong>
          <p>
            GMV refers to the total value sold of goods sold on a platform
            subtracting the cancellation and the return of the item. This growth
            can be credited to the change in shopping trends, which has taken a
            digital route due to the pandemic, and also e-commerce shopping has
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewList;
