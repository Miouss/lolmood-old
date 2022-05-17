import React from "react";

import "../styles/StatsByChampCard.css";

import 'react-circular-progressbar/dist/styles.css';

function StatsByChampCard(props) {
    const champName = props.data[0];
    const champImg = require("../assets/loldata/img/champion/centered/" + champName + "_0.jpg");
    const played = props.data[1]["played"];

    const winrate = props.data[1]["winrate"];

    const averageKills = props.data[1]["averageKills"];
    const averageDeaths = props.data[1]["averageDeaths"];
    const averageAssists = props.data[1]["averageAssists"];

    return (
        <>
            <div className="stats-by-champ-card">
                <div className="stats-champ-container">
                    <img src={champImg} alt="champion" />
                </div>

                <div className="stats-container">
                     <div>
                        <span>Games</span>
                        <span>Winrate</span>
                        <span>KDA</span>
                    </div>
                    <div>
                        <span>{played}</span>
                        <span>{winrate} %</span>
                        <span>{averageKills}/{averageDeaths}/{averageAssists}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatsByChampCard;