import { stylesImgs, statsModImgs } from "./runesImg";

import "../styles/RunesTree.css";

function RuneTree(props){

    let style = [];
    let runes = [];
    
    
    stylesImgs.forEach(element => {
        if(element["id"] === props.primaryStyle){
            style[0] = element["img"];
        }else if(element["id"] === props.subStyle){
            style[1] = element["img"];
        }
    });

    return(
        <img id="perk-stats" src={style[0]} alt="SLT" />
    );
}

export default RuneTree;