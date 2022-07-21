import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Switch from "bootstrap-switch-button-react";

import Champ from "./ChampPresentation";
import Runes from "./ChampRunes";
import Items from "./ChampItems";
import Sums from "./ChampSums";
import Skills from "./ChampSkills";

import backButtonSVG from "../assets/back_button.svg";

import "../styles/ChampStats.css";

function ChampStats(props) {
  let [champStats, setChampStats] = useState(undefined);
  let [displayPickRate, setDisplayPickRate] = useState(true);
  
  const nav = useNavigate();
  const location = useLocation();
  
  let champName = location["pathname"].replace("/champ/", "");

  async function fetchChampStats() {
    const url = "http://lolmood.net/index.php?champName=" + champName;

    const res = await fetch(url);

    const data = await res.json();

    setChampStats(data);
  }

  useEffect(() => {
    fetchChampStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  if (champStats === undefined) {
    return null;
  } else {
    return (
      <>
        <div id="champ-stats-component">
          <div id="switch-component">
            <Switch
              onlabel="Win Rate"
              onstyle="info"
              offlabel="Pick Rate"
              offstyle="info"
              width={130}
              onChange={() => setDisplayPickRate(!displayPickRate)}
            />
          </div>

          <button id="back-button-component">
            <img
              src={backButtonSVG}
              onClick={() => location["state"] === null ? nav("/") : nav(-1)}
            />
          </button>

          <div id="champ-component">
            <Champ champName={champName} />
          </div>

          <div id="runes-component">
            <Runes
              runes={champStats["runes"]}
              statsMods={champStats["statsMods"]}
              displayPickRate={displayPickRate}
            />
          </div>

          <div id="sums-component">
            <Sums
              summoners={champStats["summoners"]}
              displayPickRate={displayPickRate}
            />
          </div>

          <div id="items-component">
            <Items
              startItems={champStats["startItems"]}
              completedItems={champStats["completedItems"]}
              displayPickRate={displayPickRate}
            />
          </div>

          <div id="skills-component">
            <Skills
              skills={champStats["skills"]}
              evolves={champStats["evolves"]}
              champName={champName}
              displayPickRate={displayPickRate}
            />
          </div>
        </div>
      </>
    );
  }
}

export default ChampStats;
