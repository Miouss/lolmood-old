import React,{ useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";

import Header from './Header';
import SearchBar from "./SearchBar";
import SummonerStats from "./SummonerStats";

import "../styles/Homepage.css";


function Homepage(props){
    let [data, setData] = useState(null);

    useEffect(() =>{
        if(data != null){
            props.header.render(<Header main={props.main} />)
        }
    }, [data, props.header, props.main]);

    if (data != null){
        return <SummonerStats data={data} />
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

export default Homepage;