import React, {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { products,category } from "../constant";
import "./CategoryPage.css"

function CategoryPage() {
  const {name} = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    let categoryName = category[name] || "";
    const newList = products.filter((item) => {
      return (
        item.category.includes(categoryName)
      );
    });
    setProduct([...newList]);
    return () => {};
  }, [name]);

  return (
    <>
      <Header />
      <h2 className="SearchPageHeading">{`Category: ${(category[name] || "")}`}</h2>
      <ProductList list={product} />
    </>
  );
}

export default CategoryPage
