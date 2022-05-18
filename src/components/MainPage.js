import React,{ useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";

import Header from './Header';
import SearchBar from "./SearchBar";
import SummonerStats from "./SummonerStats";

import "../styles/MainPage.css";


function MainPage(props){
    let [data, setData] = useState(undefined);

    useEffect(() =>{
        if(data !== undefined){
            props.header.render(<Header main={props.main} />)
        }
    }, [data, props.header, props.main]);

    if (data !== undefined){
        return <SummonerStats data={data} main={props.main} />
    }else{
      return(
            <>
                <img src={require("../assets/decor-frame.svg")} alt='' />
                <div className="search-container">
                    <SearchBar hideCount={true} area="main" data={data} setData={setData} />
                </div>
            </>
        )  
    }
    
}

export default MainPage;