import SummonerCard from "./SummonerCard";
import StatsByChamp from "./StatsByChamp";
import GameHistory from "./GameHistory";

import "../styles/SummonerStats.css";

function SummonerStats(props) {
    return (
        <>
            <div className="summoner-stats-area">
                <div>
                    <SummonerCard data={props.data["Account"]} />
                    <StatsByChamp data={Object.entries(props.data["KeyStats"]["statsByChamp"])} />
                </div>
                <GameHistory data={props.data["GameHistoryData"]} main={props.main} lang={props.lang} setGoToChampPage={props.setGoToChampPage} />                 
            </div>
        </>
    );
}

export default SummonerStats;