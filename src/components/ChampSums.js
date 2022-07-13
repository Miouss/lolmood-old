import { getSummonerImg, initializeTree } from "./runesImg";

import sumsFrameSVG from "../assets/sums-frame.svg";
import sumsDesignSVG from "../assets/sums-design.svg";

import "../styles/ChampSums.css";

function ChampSums(props) {
  let summonersMP = initializeTree(
    props.summoners["mostPlayed"][0],
    "summoners",
    2,
    getSummonerImg
  );
  
  let summonersMW = initializeTree(
    props.summoners["mostWinrate"][0],
    "summoners",
    2,
    getSummonerImg
  );

  let summonersRate = props.displayPickRate ? summonersMP : summonersMW;

  return (
    <div id="sums-frame">
      <span id="sums-title">Summoners</span>
      <img id="sums-frame-svg" src={sumsFrameSVG} alt="slt" />
      <img id="sums-design-svg" src={sumsDesignSVG} alt="slt" />
      <div id="sums-imgs-container">
        <div className="sums-single-img-container">
          <img src={summonersRate["summoners"][0]["img"]} alt="slt" />
          <span>{summonersRate["rate"]}%</span>
        </div>
        <div className="sums-single-img-container">
          <img src={summonersRate["summoners"][1]["img"]} alt="slt" />
          <span>{summonersRate["rate"]}%</span>
        </div>
      </div>
    </div>
  );
}

export default ChampSums;
