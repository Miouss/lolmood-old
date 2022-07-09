import { getEmblemeImg } from "./runesImg";

import frameSVG from "../assets/summoner-details-frame.svg";

import "../styles/SummonerCard.css";

function SummonerCard(props) {
  let name = props.data["name"];
  let rankIcon = getEmblemeImg(props.data["rank"]);

  let rank = props.data["rank"] + " " + props.data["tier"];
  let lp = props.data["lp"];
  let games = props.data["games"];
  let winrate = ((props.data["wins"] / games) * 100).toFixed(2);

  return (
    <>
      <div id="summoner-card-frame">
        <div id="summoner-details-frame">
          <img id="summoner-details-frame-svg" src={frameSVG} />

          <div id="summoner-details-name-and-rank">
            <span>{name}</span>
            <img src={rankIcon} />
          </div>
        </div>

        <div id="summoner-stats-frame">
          <div>
            <span>Rank</span>
            <span>LP</span>
            <span>Games</span>
            <span>Winrate</span>
          </div>

          <div>
            <span>{rank}</span>
            <span>{lp}</span>
            <span>{games}</span>
            <span>{winrate}%</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SummonerCard;
