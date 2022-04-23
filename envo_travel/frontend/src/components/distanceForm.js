import React, { useState } from "react";

export default function DistanceForm() {
  const [distance, setDistance] = useState(0);

  const onSubmit = (e) => {
    setDistance(e.target.value);
  };

  return (
    <form>
      <label>Distance </label>
      <input value={distance} onChange={onSubmit} />
      <input type="submit" value="submit" />
    </form>
  );
}
