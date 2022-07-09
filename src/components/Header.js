import React, { useState, useEffect } from "react";

import logoSVG from "../assets/logo.svg";
import englishFlag from "../assets/english-flag.svg";
import frenchFlag from "../assets/french-flag.svg";

import SearchBar from "./SearchBar";

import "../styles/Header.css";

import MainPage from "./MainPage";

function Header(props) {
  let [data, setData] = useState(null);

  let [lang, setLang] = useState("fr");

  let [frFlagWidth, setFrFlag] = useState("100%");
  let [enFlagWidth, setEnFlag] = useState("50%");

  useEffect(() => {
    props.main.render(
      <>
        <MainPage
          data={data}
          setData={setData}
          lang={lang}
          setLang={setLang}
          main={props.main}
        />
      </>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, lang]);

  if (data === null) {
  } else {
    return (
      <>
        <div id="header-logo">
          <img src={logoSVG} alt="Logo" />
          <span>LOL Mood</span>
        </div>

        <div id="search-bar">
          <SearchBar hideCount={false} data={data} setData={setData} />
        </div>

        <div id="language-select">
          <div
            onClick={() => {
              setFrFlag("100%");
              setEnFlag("50%");
              setLang("fr");
            }}
          >
            <img style={{ width: frFlagWidth }} src={frenchFlag} />
          </div>

          <div
            onClick={() => {
              setEnFlag("100%");
              setFrFlag("50%");
              setLang("en");
            }}
          >
            <img style={{ width: enFlagWidth }} src={englishFlag} />
          </div>
        </div>
      </>
    );
  }
}

export default Header;
