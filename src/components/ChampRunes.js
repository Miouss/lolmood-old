import {
  getRuneImg,
  getStyleName,
  statsModImgs,
  initializeTree,
} from "./runesImg";

import runeFrameSVG from "../assets/runes-frame.svg";

import primaryStyleSVG from "../assets/primary-style.svg";
import subStyleSVG from "../assets/sub-style.svg";
import statsModsSVG from "../assets/stats-mods.svg";

import "../styles/ChampRunes.css";

function ChampRunes(props) {
  let runesMW = initializeRunesTree(props.runes["mostWinrate"][0]);
  let runesMP = initializeRunesTree(props.runes["mostPlayed"][0]);

  let statsModsMW = initializeTree(
    props.statsMods["mostWinrate"][0],
    "statsMods",
    3,
    statsModImgs,
    true
  );
  let statsModsMP = initializeTree(
    props.statsMods["mostPlayed"][0],
    "statsMods",
    3,
    statsModImgs,
    true
  );

  return (
    <>
      <div id="runes-frame">
        <div id="rune-title">RUNES</div>
        <div id="rune-frame">
          <img id="rune-frame-svg" src={runeFrameSVG} alt="slt" />
          <div id="runes-contents">
            <div id="primary-style-container">
              <img id="primary-style-svg" src={primaryStyleSVG} alt="" />
              <div>
                <img
                  className="runes-tree-style"
                  src={runesMW["primaryStyle"]["img"]}
                  alt="SLT"
                />
                <span> {runesMW["primaryStyle"]["name"]}</span>
              </div>
              <div id="primary-style-runes">
                <div id="runes-tree-perk">
                  <img
                    src={runesMW["primaryStyle"]["runes"][0]["img"]}
                    alt="SLT"
                  />
                </div>
                <img
                  className="runes-tree-rune"
                  src={runesMW["primaryStyle"]["runes"][1]["img"]}
                  alt="SLT"
                />
                <img
                  className="runes-tree-rune"
                  src={runesMW["primaryStyle"]["runes"][2]["img"]}
                  alt="SLT"
                />
                <img
                  className="runes-tree-rune"
                  src={runesMW["primaryStyle"]["runes"][3]["img"]}
                  alt="SLT"
                />
              </div>
            </div>

            <div>
              <div id="sub-style-container">
                <img id="sub-style-svg" src={subStyleSVG} alt="" />
                <div>
                  <img
                    className="runes-tree-style"
                    src={runesMW["subStyle"]["img"]}
                    alt="SLT"
                  />
                  <span> {runesMW["subStyle"]["name"]}</span>
                </div>

                <div id="sub-style-runes">
                  <img
                    className="runes-tree-rune"
                    src={runesMW["subStyle"]["runes"][0]["img"]}
                    alt="SLT"
                  />
                  <img
                    className="runes-tree-rune"
                    src={runesMW["subStyle"]["runes"][1]["img"]}
                    alt="SLT"
                  />
                </div>
              </div>

              <div id="stats-mods-container">
                <img id="stats-mods-svg" src={statsModsSVG} alt="" />

                <img src={statsModsMW["statsMods"][0]["img"]} alt="SLT" />
                <img src={statsModsMW["statsMods"][1]["img"]} alt="SLT" />
                <img src={statsModsMW["statsMods"][2]["img"]} alt="SLT" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function initializeRunesTree(runesTree) {
  let rate = undefined;

  if ("winRate" in runesTree) {
    rate = runesTree["winRate"];
  } else {
    rate = runesTree["playRate"];
  }

  return {
    primaryStyle: {
      id: runesTree["runes"][0],
      img: getRuneImg(runesTree["runes"][0]),
      name: getStyleName(runesTree["runes"][0]),
      runes: [
        { id: runesTree["runes"][2], img: getRuneImg(runesTree["runes"][2]) },
        { id: runesTree["runes"][3], img: getRuneImg(runesTree["runes"][3]) },
        { id: runesTree["runes"][4], img: getRuneImg(runesTree["runes"][4]) },
        { id: runesTree["runes"][5], img: getRuneImg(runesTree["runes"][5]) },
      ],
    },
    subStyle: {
      id: runesTree["runes"][1],
      img: getRuneImg(runesTree["runes"][1]),
      name: getStyleName(runesTree["runes"][1]),
      runes: [
        { id: runesTree["runes"][6], img: getRuneImg(runesTree["runes"][6]) },
        { id: runesTree["runes"][7], img: getRuneImg(runesTree["runes"][7]) },
      ],
    },
    played: runesTree["played"],
    rate: rate,
  };
}

export default ChampRunes;
