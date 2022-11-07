import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { category } from "../../constant";
import Title from "../Title";
import "./CategoryList.css";

function CategoryList() {
  const [categories] = useState(Object.keys(category) || []);
  const navigate = useNavigate();
  function navigateToCategory(key) {
    navigate(`/category/${encodeURI(key)}`);
  }
  return (
    <section className="categoryList">
      <Title title="Categories" />
      <div className="categoryContainer">
        {categories.map((key, i) => {
          return (
            <div
              className="categoryCard"
              key={i}
              onClick={() => {
                navigateToCategory(key);
              }}
            >
              <p>{category[key]}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CategoryList;
