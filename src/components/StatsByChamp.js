import React from "react";

import StatsByChampCard from "./StatsByChampCard";

import "../styles/StatsByChamp.css";

function StatsByChamp(props) {
  let StatsByChampCards = [];

  props.data.forEach((element) => {
    StatsByChampCards.push(<StatsByChampCard key={element} data={element} />);
  });

  return (
    <>
      <div className="stats-by-champ-card-area">
        <div>
          {StatsByChampCards[0]}
          {StatsByChampCards[1]}
          {StatsByChampCards[2]}
        </div>
      </div>
    </>
  );
}

export default StatsByChamp;
