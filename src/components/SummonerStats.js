import React from "react";

import StatsByChamp from "./StatsByChamp";
import GameHistory from "./GameHistory";

import "../styles/SummonerStats.css";

function SummonerStats(props) {
    return (
        <>  
            <div className="summoner-stats-area">
                <StatsByChamp data={Object.entries(props.data["KeyStats"]["statsByChamp"])} />
                <GameHistory data={props.data["GameHistoryData"]}/>                 
            </div>
        </>
    );
}

export default SummonerStats;
