/* eslint-disable react/prop-types */
import "./category.css";
//import { data } from "../../localdata";
//import { useState } from "react";

const Category = (props) => {
  return (
    <main
      className={!props.col ? "category-container" : "category-container-color"}
    >
      <div className="category-icon-div">
        <img src={props.icon} alt="icon" className="category-icon" />
      </div>
      <div className="category-text">{props.text}</div>
    </main>
  );
};

export default Category;
