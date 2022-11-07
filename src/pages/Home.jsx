import React from "react";
import CategoryList from "../components/CategoryList";
import Contact from "../components/Contact";
import Header from "../components/Header";
import "./Home.css"

function Home() {
  return (
    <>

    <div>
      <div className="section1">
      <Header />
      <CategoryList />
      </div>
      <Contact/>
    </div>
    </>
  );
}

export default Home;
