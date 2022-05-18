import React from "react";

import runesJSON from "../assets/loldata/current/data/en_US/runesReforged.json";

import GameHistoryCardTooltip from "./GameHistoryCardTooltip";

import { stylesImgs, statsModImgs } from "./runesImg";

import "../styles/GameHistoryCardStyles.css"

function GameHistoryCardStyles(props){
    let perkIcon = undefined; 
    let runeIcons = [];
    let statsModIcons = [];
    

    statsModImgs.forEach(statsModImg => {
        props.idStatsMods.forEach((idStatsMod, index) => {
            statsModIcons[index] = (statsModImg["id"] === idStatsMod) ? statsModImg["img"] : statsModIcons[index];
        });
    });

    stylesImgs.forEach(stylesImg => {
        if (props.idPrimaryStyle === stylesImg["id"] || props.idSubStyle === stylesImg["id"]) {
            stylesImg["runes"].forEach(rune => {
                if(rune["id"] === props.idPerk){
                    perkIcon = rune["img"];
                }

                else{
                    props.idRunes.forEach((idRune, index) => {
                        runeIcons[index] = (rune["id"] === idRune) ? rune["img"] : runeIcons[index];
                    })
                }       
            });
        }
    });

    let primaryRuneIcons = [];
    let subRuneIcons = [];

    runeIcons.forEach((runeIcon, index) => {
        (index < 3) ? primaryRuneIcons.push(runeIcon) : subRuneIcons.push(runeIcon);
    })

    let primaryRuneJSON = null;
    let subRuneJSON = null;

    runesJSON.forEach(style => {
        if(style["id"] === props.idPrimaryStyle){
            primaryRuneJSON = style["slots"];
        }

        else if(style["id"] === props.idSubStyle){
            subRuneJSON = style["slots"];
        }
    })

    return(
        <div className="game-history-card-style">
            <div className="card-perk">
                <GameHistoryCardTooltip key={`${props.identifier}${props.idPerk}`} type="perk" runeJSON={primaryRuneJSON} idPerk={props.idPerk} perkIcon={perkIcon} />
            </div>
            <div className="card-style">
                <div className="card-primary-style">
                    {
                        primaryRuneIcons.map((primaryRuneIcon, index) => {
                            return <GameHistoryCardTooltip key={`${props.identifier}${props.idPerk}${index}`} type="runes" runeJSON={primaryRuneJSON} idRunes={props.idRunes} runeIcon={primaryRuneIcon} index={index} row="1" />

                        })
                    }
                </div>
                <div className="card-sub-style">
                    {
                        subRuneIcons.map((subRuneIcon, index) => {
                            return <GameHistoryCardTooltip key={`${props.identifier}${props.idPerk}${index+3}`} type="runes" runeJSON={subRuneJSON} idRunes={props.idRunes} runeIcon={subRuneIcon} index={index+3} row="2" />
                        })
                    }
                </div>
                <div className="card-stats-mod">
                    {
                        statsModIcons.map((statsModIcon, index) => {
                            return <div key={index}><img src={statsModIcon} alt={`statsMod${index}`} /></div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default GameHistoryCardStyles;