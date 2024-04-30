import React from "react";
import "./Cleaning.css";
import General from "./General";
import Kitchen from "./Kitchen";
import Bathroom from "./Bathroom";

export default function Cleaning() {
  return (
    <div className="Cleaning">
      <h3>Here's your Cleaning CheckList🧽😉</h3>
      <form className="checks">
        <Bathroom />
        <General />
        <Kitchen />
      </form>
    </div>
  );
}
