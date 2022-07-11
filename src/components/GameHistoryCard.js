import React, { useState } from "react";

import GameHistoryCardItems from "./GameHistoryCardItems";
import GameHistoryCardStyles from "./GameHistoryCardStyles";

import { getSummonerImg } from "./runesImg";

import "../styles/GameHistoryCard.css";

function GameHistoryCard(props) {
  let [colorOpacity, setColorOpacity] = useState(1);

  const champName = props.data["name"];
  let lane = props.data["lane"].toLowerCase();

  const kills = props.data["kills"];
  const deaths = props.data["deaths"];
  const assists = props.data["assists"];

  if (props.data["duration"] < 300) {
    lane = "remake";
  }

  const champImg = require("../assets/loldata/img/champion/centered/" +
    champName +
    "_0.jpg");
  const laneImg = require("../assets/loldata/current/img/position/" +
    lane +
    ".png");

  const summonerImg = [
    getSummonerImg(props.data["summoner1"]),
    getSummonerImg(props.data["summoner2"]),
  ];

  let color =
    props.data["win"] === 1
      ? "rgba(32, 140, 209, " + colorOpacity + ")"
      : "rgba(189, 37, 124, " + colorOpacity + ")";

  return (
    <>
      <div
        onMouseEnter={() => setColorOpacity(0.5)}
        onMouseLeave={() => setColorOpacity(1)}
        onClick={() => props.setGoToChampPage([true, champName])}
        className="game-history-card"
        style={{ border: "solid 1px " + color }}
      >
        <div className="game-history-card-champ-lane">
          <div className="champ-container">
            <img className="champ-img" src={champImg} alt={champName} />
          </div>

          <div className="lane-container">
            <img className="lane-img" src={laneImg} alt={lane} />
          </div>
        </div>
        <div className="game-history-card-summoners">
          <img src={summonerImg[0]} alt={lane} />
          <img src={summonerImg[1]} alt={lane} />
        </div>

        <GameHistoryCardStyles
          idRunes={props.data["runes"]}
          idStatsMods={props.data["statsMods"]}
          idPrimaryStyle={props.data["primaryStyle"]}
          idSubStyle={props.data["subStyle"]}
          idPerk={props.data["perk"]}
          identifier={props.data["identifier"]}
          lang={props.lang}
        />
        <GameHistoryCardItems
          idItems={props.data["items"]}
          identifier={props.data["identifier"]}
          lang={props.lang}
        />

        <div
          className="game-history-card-kda"
          style={{ backgroundColor: color }}
        >
          <div>
            <div>K</div>
            <div>D</div>
            <div>A</div>
          </div>
          <div>
            <div>{kills}</div>
            <div>{deaths}</div>
            <div>{assists}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameHistoryCard;
