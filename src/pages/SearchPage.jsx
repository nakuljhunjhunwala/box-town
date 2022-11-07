import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { products } from "../constant";
import "./SearchPage.css";

function SearchPage() {
  const [params] = useSearchParams();
  const [search, setSearch] = useState("");
  const [searchedProduct, setSearchedProduct] = useState([]);

  useEffect(() => {
    setSearch(params.get("s") || "");
    const newList = products.filter((item) => {
      return (
        item.name.toLowerCase().startsWith(search.toLowerCase()) ||
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    });
    setSearchedProduct([...newList]);
    return () => {};
  }, [params, search]);

  return (
    <>
      <Header />
      <h2 className="SearchPageHeading">{`Showing result for: ${search}`}</h2>
      <ProductList list={searchedProduct} />
    </>
  );
}

export default SearchPage;
