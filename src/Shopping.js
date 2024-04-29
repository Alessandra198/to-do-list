import React from "react";
import "./Shopping.css";
import HygieneProducts from "./HygieneProducts";

export default function Shopping() {
  return (
    <div className="Shopping">
      <h3>Here's your Grocery Shopping list🛒😉</h3>
      <form className="checks">
        <HygieneProducts />
      </form>
    </div>
  );
}
