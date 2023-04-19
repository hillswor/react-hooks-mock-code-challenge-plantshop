import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  console.log(plants);
  return (
    <ul className="cards">
      <PlantCard plants={plants} />
    </ul>
  );
}

export default PlantList;
