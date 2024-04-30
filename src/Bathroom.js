import React from "react";

export default function Bathroom() {
  return (
    <div className="check">
      <h4>Bathroom</h4>
      <div>
        <label>
          <input type="checkbox" />
          Clean the make-up station
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" />
          Clean the mirror(s)
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" />
          Clean the sink(s)
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" />
          Disinfect
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" />
          Refill soap, toilet papers and air freshener
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" />
          Wash the shower (dry it) and the bath tub
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" />
          Wash toilet and toilet seat (and bidet)
        </label>
      </div>
    </div>
  );
}
