import RuneTree from "./RunesTree";

function ChampStats(props){
    async function fetchChampStats() {
        const url = "http://localhost/index.php?champName=" + props.champName

        const res = await fetch(url);
 
        const data = await res.json();

        console.log(data);
    }

    fetchChampStats();

    return(
        <RuneTree perk={8112} rune={9101} statsMod={5005} primaryStyle={8100} />
    )
}

export default ChampStats;