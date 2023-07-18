import React from "react";
import "./Productlist.css";
import Product from "../Product/Product"
import{products} from "../../data"
const Productlist = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Projects</h1>
        <p className="pl-desc">
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map(item=>(
          <Product key = {item.id} img={item.img} link={item.link} title={item.title}/>))}
      </div>
      
    </div>
  );
};

export default Productlist;
