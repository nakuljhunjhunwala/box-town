import React, { useState,useContext ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../constant";
import { CartContext } from "../context/context";
import "./Cart.css";

function Cart() {
  const cart = useContext(CartContext);
  const [productList, setProductList] = useState([]);
const navigate = useNavigate();

  useEffect(() => {
    let arr = cart.cart.map(item=>{
      return products.find((product)=>{
        return product.id === item;
      });
    });

    setProductList((productList)=>{
      return [...arr]
    })
  
    return () => {
      
    }
  }, [cart.cart])
  
  return (
    <div className="cart">
      <div className="cartHeader">
        <i class="fas fa-arrow-left"
        onClick={()=>{
          navigate(-1)
        }}
        ></i>
        <p>Shopping Cart</p>
      </div>
      <div className="cartBody">
        {
          productList.map(item=>{
return (
  <div className="cartList">
          <div className="cartProduct">
            <div>
              {item.name}
            </div>
            <div>
            ₹ {item.price}
            </div>
          </div>
          <div className="cartRemove"
          onClick={()=>{
            let newCartList = cart.cart.filter(id=>{
              return id !== item.id
            });
            cart.setCart([...newCartList])
          }}
          >Remove</div>
        </div>
)
          })
        }
        
      </div>
      <div className="cartFooter">f</div>
    </div>
  );
}

export default Cart;
