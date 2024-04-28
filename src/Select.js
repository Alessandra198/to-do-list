import React from "react";

export default function Select() {
  return (
    <div className="Select">
      <h2>Which list do you need?</h2>
      <select>
        <option value="">Choose one list😉</option>
        <option value="shopping">Grocery Shopping</option>
        <option value="cleaning">Home Cleaning</option>
        <option value="morning">Morning Routine</option>
        <option value="night">Night Routine</option>
      </select>
    </div>
  );
}
