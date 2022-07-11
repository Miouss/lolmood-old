import React, { useState } from "react";

import SearchOption from "./SearchOption";

import "../styles/SearchBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function SearchBar(props) {
  let [regionSelected, setRegionSelected] = useState(undefined);

  let [isRegionSelectHidden, setRegionSelectHidden] = useState(true);
  let [regionBackground, setRegionBackground] = useState("center");

  let [isSummonerInputHidden, setSummonerInputHidden] = useState(true);
  let [summonerBackground, setSummonerBackground] = useState("center");

  let [isCountInputHidden, setCountInputHidden] = useState(true);
  let [countBackground, setCountBackground] = useState("center");

  let [searchIcon, setSearchIcon] = useState(faMagnifyingGlass);

  async function fetchData() {
    const url =
      "http://lolmood.net/index.php?summonerName=" +
      document.getElementById("summoner-search").value +
      "&region=" +
      regionSelected +
      "&count=" +
      document.getElementById("count-search").value;

    const res = await fetch(url);

    const data = await res.json();

    setSearchIcon(faMagnifyingGlass);
    if (typeof data === "string") {
      alert(data);
    } else {
      props.setData(data);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    let count = parseInt(document.getElementById("count-search").value);
    let summonerName = document.getElementById("summoner-search").value;

    if (regionSelected === undefined) {
      alert("You have to select a region first");
    } else if (summonerName === "") {
      alert("You have to enter a summoner name to search");
    } else if (isNaN(count) || count < 1 || count > 99) {
      alert("You have to enter a number of history game between 1 - 49");
    } else {
      setSearchIcon(faSpinner);
      fetchData();
    }
  }

  function handleOnClick(field) {
    switch (field) {
      case "region":
        setRegionSelectHidden(!isRegionSelectHidden);
        if (regionBackground === "center") {
          setRegionBackground("bottom");
        } else {
          setRegionBackground("center");
        }
        break;
      case "summoner":
        setSummonerInputHidden(!isSummonerInputHidden);
        if (summonerBackground === "center") {
          setSummonerBackground("bottom");
        } else {
          setSummonerBackground("center");
        }
        break;
      case "count":
        setCountInputHidden(!isCountInputHidden);
        if (countBackground === "center") {
          setCountBackground("bottom");
        } else {
          setCountBackground("center");
        }
        break;
      default:
    }
  }

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div
          id="region-select-block"
          style={{ backgroundPosition: `${regionBackground}` }}
        >
          <label
            onClick={() => handleOnClick("region")}
            htmlFor="region-select"
          >
            Region
          </label>
          <select
            hidden={isRegionSelectHidden}
            id="region-select"
            onChange={(e) => setRegionSelected(e.target.value)}
          >
            <option hidden />
            <SearchOption region="EUW" />
            <SearchOption region="EUNE" />
            <SearchOption region="NA" />
            <SearchOption region="BR" />
            <SearchOption region="LAN" />
            <SearchOption region="LAS" />
            <SearchOption region="OCE" />
            <SearchOption region="KR" />
            <SearchOption region="RU" />
            <SearchOption region="TR" />
            <SearchOption region="JP" />
          </select>
        </div>
        <div
          id="summoner-search-block"
          style={{ backgroundPosition: `${summonerBackground}` }}
        >
          <label
            htmlFor="summoner-search"
            onClick={() => handleOnClick("summoner")}
          >
            Summoner Search
          </label>
          <input hidden={isSummonerInputHidden} id="summoner-search" />
        </div>
        <div
          hidden={props.hideCount}
          id="count-search-block"
          style={{ backgroundPosition: `${countBackground}` }}
        >
          <label htmlFor="count-search" onClick={() => handleOnClick("count")}>
            Number of games
          </label>
          <input
            hidden={isCountInputHidden}
            id="count-search"
            defaultValue="10"
          />
        </div>
        <button type="submit" id="search-button">
          <FontAwesomeIcon
            icon={searchIcon}
            fontSize="1.8rem"
            spin={searchIcon === faSpinner ? true : false}
          />
        </button>
      </form>
    </>
  );
}

export default SearchBar;
