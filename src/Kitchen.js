import React from "react";

export default function Kitchen() {
  return (
    <div className="check">
      <h4>Kitchen</h4>
      <div>
        <label>
          <input type="checkbox" />
          Clean the stove
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" />
          Empty the garbage bin(s)
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" />
          Put the tablecloth and cloths to wash
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" />
          Throw away expired or spoiled foods
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" />
          Wash inside the fridge and the freezer
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" />
          Wash the dishes
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" />
          Wipe the kitchen counter
        </label>
      </div>
    </div>
  );
}
