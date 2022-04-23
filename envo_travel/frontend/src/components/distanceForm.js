import React, { useState } from "react";

export default function DistanceForm() {
  const [distance, setDistance] = useState(0);

  const onSubmit = (e) => {
    setDistance(e.target.value);
  };

  return (
    <div>
      <form>
        <label>Distance (km) </label>
        <input value={distance} onChange={onSubmit} />
        <input type="submit" value="submit" />
      </form>
      <h2>Estimated Carbon Emission</h2>
      <p>{distance * 32} CO2/km </p>
    </div>
  );
}
