import React from "react";
import GameHistoryCardTooltip from "./GameHistoryCardTooltip";

import enItemsJSON from "../assets/loldata/current/data/en_US/item.json";
import frItemsJSON from "../assets/loldata/current/data/fr_FR/item.json";

import { getItemImg } from "./runesImg";

import "../styles/GameHistoryCardItems.css";

function GameHistoryCardItems(props) {
  let itemsIconsFirstRow = new Array(3);
  let itemsIconsSecondRow = new Array(3);

  for (let i = 0; i < props.idItems.length; i++) {
    if (i < 3) {
      itemsIconsFirstRow[i] = getItemImg(props.idItems[i]);
    } else {
      itemsIconsSecondRow[i - 3] = getItemImg(props.idItems[i]);
    }
  }

  let itemsJSON = props.lang === "fr" ? frItemsJSON : enItemsJSON;

  return (
    <>
      <div className="game-history-card-items">
        <div>
          {itemsIconsFirstRow.map((itemIcon, index) => {
            if (props.idItems[index] === undefined) {
              return (
                <div
                  key={`${props.idItems[index]}${props.identifier}`}
                  className="empty-item"
                ></div>
              );
            } else {
              return (
                <GameHistoryCardTooltip
                  key={`${index}${props.identifier}`}
                  type="items"
                  itemsJSON={itemsJSON}
                  idItems={props.idItems}
                  itemIcon={itemIcon}
                  identifier={props.identifier}
                  index={index}
                  lang={props.lang}
                />
              );
            }
          })}
        </div>
        <div>
          {itemsIconsSecondRow.map((itemIcon, i) => {
            let index = i + 3;

            if (props.idItems[index] === undefined) {
              return (
                <div
                  key={`${index}${props.identifier}`}
                  className="empty-item"
                ></div>
              );
            } else {
              return (
                <GameHistoryCardTooltip
                  key={`${index}${props.identifier}`}
                  type="items"
                  itemsJSON={itemsJSON}
                  idItems={props.idItems}
                  itemIcon={itemIcon}
                  identifier={props.identifier}
                  index={index}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default GameHistoryCardItems;
