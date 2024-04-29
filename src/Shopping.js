import React from "react";
import "./Shopping.css";
import HygieneProducts from "./HygieneProducts";
import Carbo from "./Carbo";
import FruitsandVegetables from "./FruitsAndVegetables";
import DrinksAndOthers from "./DrinksAndOthers";

export default function Shopping() {
  return (
    <div className="Shopping">
      <h3>Here's your Grocery Shopping list🛒😉</h3>
      <form className="checks">
        <Carbo />
        <FruitsandVegetables />
        <DrinksAndOthers />
        <HygieneProducts />
      </form>
    </div>
  );
}
