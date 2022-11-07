import React, { useState } from "react";
import "./SearchPage.css";

function SearchPage({ visible, setshowsearch, startsearch }) {
  const [searchText, setSearchText] = useState("");

  return (
    <div className={`searchPage ${visible ? "showSearch" : ""}`}>
      <div className="searchContainer">
        <form
          action=""
          onSubmit={(event) => {
            startsearch(event, searchText);
            setSearchText("");
            setshowsearch(false);
          }}
        >
          <input
            placeholder="Search for your product"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
        </form>
        <i
          className="fas fa-search"
          onClick={(event) => {
            startsearch(event, searchText);
            setSearchText("");
            setshowsearch(false);
          }}
        ></i>
        
      </div>
      <div className="close">     
      <span
      onClick={()=>{
        setSearchText("");
        setshowsearch(false);

      }}
      >
      Close Search
        </span> 
</div>
    </div>
  );
}

export default SearchPage;
