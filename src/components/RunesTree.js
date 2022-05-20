import { stylesImgs, statsModImgs } from "./runesImg";

import runeFrameSVG from "../assets/runes-frame.svg"

import primaryStyleSVG from "../assets/primary-style.svg"
import subStyleSVG from "../assets/sub-style.svg"
import statsModsSVG from "../assets/stats-mods.svg"

import "../styles/RunesTree.css";

function RuneTree(props) {
    let runesMW = initilizeRunesTree(props.runes["mostWinrate"]);
    let runesMP = initilizeRunesTree(props.runes["mostPlayed"]);

    stylesImgs.forEach(element => {
        if (element['id'] === runesMW["primaryStyle"]["id"]) {
            runesMW["primaryStyle"]["img"] = element["img"];
            runesMW["primaryStyle"]["name"] = element["name"];
            runesMW["primaryStyle"]["runes"] = fillRunesImgs(runesMW["primaryStyle"]["runes"], element["runes"]);
        } else if (element['id'] === runesMW["subStyle"]["id"]) {
            runesMW["subStyle"]["img"] = element["img"];
            runesMW["subStyle"]["name"] = element["name"];
            runesMW["subStyle"]["runes"] = fillRunesImgs(runesMW["subStyle"]["runes"], element["runes"]);
        }

        if (element['id'] === runesMP["primaryStyle"]["id"]) {
            runesMP["primaryStyle"]["img"] = runesMP["img"];
            runesMP["primaryStyle"]["name"] = runesMP["name"];
            runesMP["primaryStyle"]["runes"] = fillRunesImgs(runesMP["primaryStyle"]["runes"], element["runes"]);
        } else if (element['id'] === runesMP["subStyle"]["id"]) {
            runesMP["subStyle"]["img"] = element["img"];
            runesMP["subStyle"]["name"] = element["name"];
            runesMP["subStyle"]["runes"] = fillRunesImgs(runesMP["subStyle"]["runes"], element["runes"]);
        }
    });


    let statsModsMW = initilizeStatsModsTree(props.statsMods["mostWinrate"]);
    let statsModsMP = initilizeStatsModsTree(props.statsMods["mostPlayed"]);

    statsModImgs.forEach(element => {
        statsModsMW["statsMods"].forEach(currentStatsMods => {
            if(element["id"] === currentStatsMods["id"]){
                currentStatsMods["img"] = element["img"]
            }
        })

        statsModsMP["statsMods"].forEach(currentStatsMods => {
            if(element["id"] === currentStatsMods["id"]){
                currentStatsMods["img"] = element["img"]
            }
        })
    })

    return (<>
        <div id="rune-complete-container">
            <h1 id="rune-title">RUNES</h1>
            <div id="rune-frame">
                <img id="rune-frame-svg" src={runeFrameSVG} alt='slt' />
                <div id="runes-contents">
                    <div id="primary-style-container">
                        <img id="primary-style-svg" src={primaryStyleSVG} alt=""/>               
                        <div>
                            <img className="runes-tree-style" src={runesMW["primaryStyle"]["img"]} alt="SLT" />
                            <span> {runesMW["primaryStyle"]["name"]}</span>
                        </div>
                        <div id="primary-style-runes">
                            <div id="runes-tree-perk"><img src={runesMW["primaryStyle"]["runes"][0]["img"]} alt="SLT" /></div>
                            <img className="runes-tree-rune" src={runesMW["primaryStyle"]["runes"][1]["img"]} alt="SLT" />
                            <img className="runes-tree-rune" src={runesMW["primaryStyle"]["runes"][2]["img"]} alt="SLT" />
                            <img className="runes-tree-rune" src={runesMW["primaryStyle"]["runes"][3]["img"]} alt="SLT" />
                        </div>  
                    </div>


                    <div>
                        <div id="sub-style-container">
                            <img id="sub-style-svg" src={subStyleSVG} />               
                            <div>
                                <img className="runes-tree-style" src={runesMW["subStyle"]["img"]} alt="SLT" />
                                <span> {runesMW["subStyle"]["name"]}</span>
                            </div>

                            <div id="sub-style-runes">
                                <img className="runes-tree-rune" src={runesMW["subStyle"]["runes"][0]["img"]} alt="SLT" />
                                <img className="runes-tree-rune" src={runesMW["subStyle"]["runes"][1]["img"]} alt="SLT" />
                            </div>
                        </div>


                        <div id="stats-mods-container">
                            <img id="stats-mods-svg" src={statsModsSVG} /> 

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

function initilizeRunesTree(runesTree) {
    let rate = undefined;

    if ("winRate" in runesTree) {
        rate = runesTree["winRate"];
    } else {
        rate = runesTree["playRate"];
    }

    return {
        "primaryStyle": {
            "id": runesTree["runes"][0],
            "img": undefined,
            "name" : undefined,
            "runes": [
                { "id": runesTree["runes"][2], "img": undefined },
                { "id": runesTree["runes"][3], "img": undefined },
                { "id": runesTree["runes"][4], "img": undefined },
                { "id": runesTree["runes"][5], "img": undefined }
            ]
        },
        "subStyle": {
            "id": runesTree["runes"][1],
            "img": undefined,
            "name" : undefined,
            "runes": [
                { "id": runesTree["runes"][6], "img": undefined },
                { "id": runesTree["runes"][7], "img": undefined }
            ]
        },
        "played": runesTree["played"],
        "rate": rate
    };
}

function initilizeStatsModsTree(statsModsTree) {
    let rate = undefined;

    if ("winRate" in statsModsTree) {
        rate = statsModsTree["winRate"];
    } else {
        rate = statsModsTree["playRate"];
    }

    return {
        "statsMods" : [
            {
                "id" : statsModsTree["statsMods"][0],
                "img" : undefined
            },
            {
                "id" : statsModsTree["statsMods"][1],
                "img" : undefined
            },
            {
                "id" : statsModsTree["statsMods"][2],
                "img" : undefined
            }
        ],
        "played" : statsModsTree["played"],
        "rate" : rate
    }
}

function fillRunesImgs(tree, runes) {
    runes.forEach(rune => {
        tree.forEach(runeTree => {
            if (rune["id"] === runeTree["id"]) {
                runeTree["img"] = rune["img"];
            }
        })
    });

    return tree;
}

export default RuneTree;