import React from "react";

export default function General() {
  return (
    <div className="check">
      <h4>General Cleaning</h4>
      <div>
        <label>
          <input type="checkbox" />
          Declutter
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" />
          Dust
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" />
          Mop
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" />
          Sweep
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" />
          Vacuum
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" />
          Wash the windows
        </label>
      </div>
    </div>
  );
}
