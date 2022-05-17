import React, { useState } from "react";

import GameHistoryCard from "./GameHistoryCard";
import PageSelector from "./GameHistoryPageSelector";

import "../styles/GameHistory.css";

function GameHistory(props){
    let [bgColorPageSelector, setBgColorPageSelector] = useState(['inherit', 'black']);
    let [previousIndex, setPreviousIndex] = useState(1);

    let GameHistoryCards = [];

    let[arrayIndex, setArrayIndex] = useState(0);

    let key = 0;

    props.data.forEach(element => {
        GameHistoryCards.push(
            <GameHistoryCard key={key} data={element}/>
        )

        key -= 1;
    });

    function handleSwitchPage(buttonIndex, previousIndex){
        setArrayIndex(buttonIndex * 5);
        
        if(buttonIndex !== previousIndex){
            let oldArray = bgColorPageSelector;
            oldArray[previousIndex] = 'inherit';
            oldArray[buttonIndex] = 'black';
            setBgColorPageSelector(oldArray);
            setPreviousIndex(buttonIndex);
        }
    }


    function displayPageSelector(){
        let pageSelectorArray = [];

        for(let i = 0; i < GameHistoryCards.length / 5; i++){
            pageSelectorArray.push(<PageSelector key={i} handleSwitchPage={handleSwitchPage} bgColorPageSelector={bgColorPageSelector} previousIndex={previousIndex} indexButton={i} />
            );
        }

        return pageSelectorArray;
    }

    return (
        <>
            <div>
                <div className="game-history">

                {GameHistoryCards[arrayIndex]}
                {GameHistoryCards[arrayIndex+1]}
                {GameHistoryCards[arrayIndex+2]}
                {GameHistoryCards[arrayIndex+3]}
                {GameHistoryCards[arrayIndex+4]}

                </div>
                <div className="game-page">
                    {displayPageSelector()}
                </div>
            </div>
        </>
    )

}

export default GameHistory;