import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchGamesData } from "./fetchData";

import SummonerCard from "./SummonerCard";
import StatsByChamp from "./StatsByChamp";
import GameHistory from "./GameHistory";

import "../styles/SummonerStats.css";

function SummonerStats(props) {
  const location = useLocation();
  const navigate = useNavigate();

  async function requestData(summonerName, region){
    const data = await fetchGamesData(summonerName, region);
    if(typeof data === "string"){
      alert(data);
      navigate("/");
    }else{
      props.setData(data);
    }
  }

  useEffect(() => {
    if(props.data === null){
      let queries = location["pathname"].split("/");
      
      requestData(queries[3], queries[2]);
    }
  }, []);

  if(props.data === null){
    return null;
  }

  return (
    <>
      <div className="summoner-stats-area">
        <div>
          <SummonerCard data={props.data["Account"]} />
          <StatsByChamp
            data={Object.entries(props.data["KeyStats"]["statsByChamp"])}
          />
        </div>
        <GameHistory
          data={props.data["GameHistoryData"]}
          lang={props.lang}
          setGoToChampPage={props.setGoToChampPage}
        />
      </div>
    </>
  );
}

export default SummonerStats;
