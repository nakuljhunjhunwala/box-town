import React, { useContext } from "react";
import { CartContext } from "../../context/context";
import "./ProductList.css";

function ProductList({ list }) {
  const cart = useContext(CartContext);

  function addToCart(id) {
    cart.cart.push(id)
    cart.setCart([...new Set(cart.cart)]);
  }

  function removeFromCart(id) {
    const newArr = cart.cart.filter((item) => {
      return item !== id;
    });
    cart.setCart([...new Set(newArr)]);
  }

  return (
    <div className="cardContainer">
      {list.length ? (
        list.map((item) => {
          let removeClass = "";
          if (cart.cart.includes(item.id)) {
            removeClass = "remove";
          }
          return (
            <div className="card" key={item.id}>
              <img src={item.img} height="200px" alt="" />
              <div className="card-content">
                <h4>{item.name}</h4>
                <h5>{item.price} rs</h5>
                <li>
                  <span
                    className={`${removeClass}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (removeClass) {
                        removeFromCart(item.id);
                      } else {
                        addToCart(item.id);
                      }
                    }}
                  >
                    {removeClass ? "Remove" : "Add to cart"}
                  </span>
                </li>
              </div>
            </div>
          );
        })
      ) : <>
      <h1 className="noResult">No Result :(</h1>
      </>}
    </div>
  );
}

export default ProductList;
