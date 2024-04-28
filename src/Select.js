import React, { useState } from "react";
import Choose from "./Choose";

export default function Select() {
  let [value, setValue] = useState(null);

  function handleChange(event) {
    event.preventDefault();
    setValue(event.target.value);
  }
  return (
    <div className="Select">
      <h2>Which list do you need?</h2>
      <div className="selection">
        <select onChange={handleChange}>
          <option value="">Choose one list😉</option>
          <option value="shopping">Grocery Shopping🛒</option>
          <option value="cleaning">Home Cleaning🧽</option>
          <option value="morning">Morning Routine🌞</option>
          <option value="night">Night Routine🌛</option>
        </select>
      </div>
      <Choose value={value} />
    </div>
  );
}
