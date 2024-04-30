import React from "react";
import HygieneProducts from "./HygieneProducts";
import Carbo from "./Carbo";
import FruitsandVegetables from "./FruitsAndVegetables";
import DrinksAndOthers from "./DrinksAndOthers";
import Proteins from "./Proteins";

export default function Shopping() {
  return (
    <div className="Shopping">
      <h3>Here's your Grocery Shopping CheckList🛒😉</h3>
      <form className="checksTypeOne">
        <Carbo />
        <FruitsandVegetables />
        <DrinksAndOthers />
      </form>
      <form className="checksTypeTwo">
        <HygieneProducts />
        <Proteins />
      </form>
    </div>
  );
}
