import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SummonerStats from "./SummonerStats";
import ChampStats from "./ChampStats";

import "../styles/MainPage.css"

function MainPage(props) {
  let [goToChampPage, setGoToChampPage] = useState([false, ""]);

  useEffect(() => {
    setGoToChampPage([false, ""]);
  }, [props.data]);

  if (props.data === null) {
    return (
      <>
        <div className="search-container">
          <SearchBar
            hideCount={true}
            area="main"
            data={props.data}
            setData={props.setData}
          />
        </div>
      </>
    );
  } else if (goToChampPage[0] === false) {
    return (
      <SummonerStats
        data={props.data}
        lang={props.lang}
        setGoToChampPage={setGoToChampPage}
      />
    );
  } else {
    return (
      <ChampStats
        champName={goToChampPage[1]}
        setGoToChampPage={setGoToChampPage}
      />
    );
  }
}

export default MainPage;
