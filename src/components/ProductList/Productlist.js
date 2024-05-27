import React from "react";
import "./Productlist.css";
import Product from "../Product/Product"
import{products} from "../../data"
const Productlist = () => {
  return (
    <div className="pl" id='project-page'>
      <div className="pl-texts">
        <h1 className="pl-title">My Projects</h1>
        <p className="pl-desc">
        Check out some of the projects I worked on...
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
