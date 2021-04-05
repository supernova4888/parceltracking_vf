import React from 'react'
import { useState, useEffect } from "react";
import ParcelResult from "./ParcelResult";

export default function FetchData() {
// State
// update to Recoil format
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
    setParcels(json);
    setStatus(1);
}

function onFetchFail(error){
    console.log("Error", error);
    setStatus(2);
}

console.log(parcels);

    return (
       <div className="#">

        {/* Saves fetched data from server into the ParcelResult page */}
        {status === 0 && <p> Loading... </p>}
        {status === 1 && <ParcelResult data={parcels} />}
        {status === 2 && <p> Error, please check your connection and try again... </p>}

        { /* THIS IS NOT WORKING <ParcelResult /> - Send this data to Home first - I can't make two calls to the same page. Parcel result doesnt wait for one or the other*/}
        
        </div>
    );
    
}
