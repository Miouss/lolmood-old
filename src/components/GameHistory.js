import React, { useState } from "react";

import GameHistoryCard from "./GameHistoryCard";

import "../styles/GameHistory.css";

function GameHistory(props){
    let GameHistoryCards = [];

    let[index, setIndex] = useState(0);

    let key = 0;

    props.data.forEach(element => {
        GameHistoryCards.push(
            <GameHistoryCard key={key} data={element}/>
        )

        key -= 1;
    });

    function handleSwitchPage(){
        if(index + 5 > GameHistoryCards.length - 1){
            setIndex(0);
        }else{
            setIndex(index + 5);
        }
    }

    return (
        <>
            <div>
                <div className="game-history">
                    {GameHistoryCards[index]}
                    {GameHistoryCards[index+1]}
                    {GameHistoryCards[index+2]}
                    {GameHistoryCards[index+3]}
                    {GameHistoryCards[index+4]}
                </div>
                <div className="game-page">
                    <button onClick={handleSwitchPage}>Switch Page</button>
                </div>
            </div>
        </>
    )

}

export default GameHistory;