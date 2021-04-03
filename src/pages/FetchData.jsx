import React from 'react'
import { useState, useEffect } from "react";
import ParcelResult from "./ParcelResult";

export default function FetchData() {
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
    setParcels(json);
    console.log(json);
    setStatus(1);
}

function onFetchFail(error){
    console.log("Error", error);
    setStatus(2);
}
    
    return (
       <div className="#">

        {/* Saves fetched data from server into the ParcelResult page */}
        {status === 0 && <p> Loading... </p>}
        {status === 1 && <ParcelResult data={parcels} />}
        {status === 2 && <p> Error, please check your connection and try again... </p>}

        {/* Search button to be added - check Youtube assignment */}
        



        </div>
    );
    
}
