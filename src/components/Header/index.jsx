import React, { useState,useContext } from "react";
import Preloader from "../Preloader/Preloader";
import SearchPage from "../../components/SearchPage";
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "../../context/context";
import "./Header.css";

function Header() {
  const [preloader, setPreloader] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const cart = useContext(CartContext);


  React.useEffect(() => {
    const preloader = setTimeout(() => {
      setPreloader(false);
    }, 2000);

    return () => {
      clearTimeout(preloader);
    };
  }, []);

  function startSearch(e,searchParameter) {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/search?s=${encodeURI((searchParameter || searchText || ""))}`);
  }

  return (
    <>
      <Preloader visible={preloader} />
      <SearchPage
      visible={showSearch}
      setshowsearch={setShowSearch}
      startsearch={startSearch}
      />

      <section className="header">
        {/* <!-- Brand Logo and Name --> */}
        <div className="header_left">
<Link to={"/"} className="brandLogoLink">
          <div className="header_brandLogo">
            <img
              src={require("../../assets/logo/logo.png")}
              className="brandLogo"
              alt=""
            />
            <span className="brand_text">
              <p className="brand_name">BoxTown</p>
              <p className="brand_motto">Because, Packaging Matters</p>
            </span>
          </div>
          </Link>
        </div>
        {/* <!-- Brand Logo and Name Ends here --> */}
        <div className="header_middle">
          <form action="" onSubmit={startSearch}>
            <input
              placeholder="Search for your product"
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
            />
          </form>
          <i className="fas fa-search" onClick={startSearch}></i>
          {/* <ul>
        <li><a href="/">Services</a></li>
        <li><a href="/">Clients</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Resources</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">Careers</a></li>
      </ul> */}
        </div>

        <div className="header_right">
          <i
            id="searchMobile"
            className="fas fa-search "
            onClick={() => {
              setShowSearch(!showSearch);
            }}
          ></i>

          <i className="fas fa-shopping-cart"
          onClick={()=>{
            navigate("/cart")
          }}
          >&nbsp;({`${cart.cart.length}`})</i>
        </div>
      </section>
    </>
  );
}

export default Header;
