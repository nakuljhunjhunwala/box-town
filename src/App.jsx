import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { CartContext } from "./context/context";
import SearchPage from "./pages/SearchPage";
import CategoryPage from "./pages/CategoryPage";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const value = { cart: [...new Set(cart)], setCart: setCart };
  useEffect(() => {
    let arr = (localStorage.getItem("cart") || "").split(",") || [];
    let newArr =
      arr.map((n) => {
        return parseInt(n);
      }) || [];

    setCart((cart) => {
      return [
        ...newArr.filter((n) => {
          return typeof n === "number" && !isNaN(n);
        }),
      ];
    });
    return () => {};
  }, []);

  useEffect(() => {
    if (cart.length) {
      localStorage.setItem("cart", [...cart]);
    }
    return () => {};
  }, [cart]);

  return (
    <div className="App">
      <CartContext.Provider value={value}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/category/:name" element={<CategoryPage/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </CartContext.Provider>
    </div>
  );
}

export default App;
