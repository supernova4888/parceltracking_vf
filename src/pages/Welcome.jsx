import React from 'react'
import { useState, useEffect } from "react";
import ParcelResult from "./ParcelResult";

// Welcome page has a search bar, that calls 'link' to the other page where the 'fetch-parcelid-match' data is shown

export default function Welcome() {
// State
const [status, setStatus] = useState(0);
const [parcels, setParcels] = useState([]);

// Constants
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// Methods
// query the data and pass to JSON format
useEffect(() => {
    fetch(API_URL)
    .then((response) => response.json())
    .then((json) => onFetchSuccess(json))
    .catch((error) => onFetchFail(error));
}, [setParcels, setStatus]);

function onFetchSuccess(json) {
    // this might not be working
    setParcels(json);
    console.log(json);
    setStatus(1);
}

function onFetchFail(error){
    console.log("Error", error);
    setStatus(2);
}
    
    return (
        <div className="Welcome-page">
        {/* Update to logoURL */}
        <img src="#" alt="Welcome-img"/>
        <h1>Parcel tracker</h1>

        {status === 1 && <ParcelResult data={parcels} />}


        
        {/* {status === 1 && <ParcelResult parcels={parcels} />}

        <span>{ParcelResult.title}</span> */}


        {/* Search button to be added - check Youtube assignment */}
        {/* {status === 0 && <p> Loading... </p>}
        {status === 1 && <ParcelResult parcels={parcels} />}
        {status === 2 && <p> Error, please check your connection and try again... </p>} */}

        </div>
    );
    
}
