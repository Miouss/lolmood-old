import { useEffect, useState } from "react";

import Switch from "bootstrap-switch-button-react";

import Champ from "./ChampPresentation";
import Runes from "./ChampRunes";
import Items from "./ChampItems";
import Sums from "./ChampSums";
import Skills from "./ChampSkills";

import backButtonSVG from "../assets/back_button.svg"

import "../styles/ChampStats.css";


function ChampStats(props) {
    let [champStats, setChampStats] = useState(undefined);
    let [displayPickRate, setDisplayPickRate] = useState(false);
    
    async function fetchChampStats() {
        const url = "http://lolmood.net/index.php?champName=" + props.champName

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
        return (<>
            <div id="champ-stats-component">
                <div id="switch-component">
                    <Switch
                        onlabel="Pick Rate"
                        onstyle='info'
                        offlabel="Win Rate"
                        offstyle='info'
                        width={130}
                        onChange={() => setDisplayPickRate(!displayPickRate)}
                    />    
                </div>

                <button id="back-button-component">
                    <img src={backButtonSVG} onClick={() => props.setGoToChampPage([false, ""])} />
                </button>
    
                <div id="champ-component">
                    <Champ champName={props.champName}/>
                </div>

                <div id="runes-component">
                    <Runes runes={champStats["runes"]} statsMods={champStats["statsMods"]} />
                </div>

                <div id="sums-component">
                    <Sums summoners={champStats["summoners"]} />
                </div>

                <div id="items-component">
                    <Items startItems={champStats["startItems"]} completedItems={champStats["completedItems"]} displayPickRate={displayPickRate} />
                </div>

                <div id="skills-component">
                    <Skills skills={champStats["skills"]} champName={props.champName} displayPickRate={displayPickRate} />
                </div>
            </div>
        </>
        )
    }
}

export default ChampStats;