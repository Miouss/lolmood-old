function ChampPresentation(props){
    const champImg = require("../assets/loldata/img/champion/loading/" + props.champName + "_0.jpg");

    return(
        <div id="champ-frame">
            <img src={champImg} />            
        </div>
    )
}

export default ChampPresentation;