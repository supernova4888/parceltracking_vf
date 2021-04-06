import React from 'react'
import { useState, useEffect } from "react";
import { ParcelResult } from "../components/ParcelResult";

export default function FetchData ({match}) {
// State
const info = match.params.query;
let parcelID = info.split(":")[1];
const [status, setStatus] = useState(0);
const [parcels, setParcels] = useState([]);

// Constants
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// Methods - query the data and pass to JSON format
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

const filteredList = parcels.filter(item => item )
// why this map is here? where do we 'filter' the data
const mappedFilteredList = filteredList.map(parcel => (<ParcelResult key ={parcel.id} item={parcel} />));

console.log(filteredList);

    return (
    <div>
        {status === 0 && <p> Loading... </p>}
        {status === 1 && <p>{mappedFilteredList}</p>}
        {status === 2 && <p> Error, please check your connection and try again... </p>}        
    </div>
    );
    
}

