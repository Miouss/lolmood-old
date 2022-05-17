import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";


import SearchBar from './SearchBar'
import SummonerStats from "./SummonerStats";

import "../styles/Header.css"

function Header(props){
    let [data, setData] = useState(null);

    useEffect(() =>{
        if(data != null){
            props.main.render(<SummonerStats data={data} />);
        }
    }, [data, props.main]);

    return(<>
            <div id="header-logo">
                <span>LOL Mood</span>
            </div>

            <div id="search-bar">
                <SearchBar hideCount={false} data={data} setData={setData} />
            </div>

            <div id="language-select">
                <select>
                    <option>fr</option>
                    <option>en</option>
                </select>
            </div>
        </>
    )
}

export default Header;