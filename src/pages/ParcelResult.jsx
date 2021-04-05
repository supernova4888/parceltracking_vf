// Search Results
import React from 'react'
import { useState, useEffect } from "react";
import FetchData from "./FetchData";


export default function ParcelResult({data}) {
    //const parcelArray = data.map((item) => <li key={item.id}>{item.title}</li>);

    // dummy variable to "find"
    //const searchedParcel = "et porro tempora";

    console.log(data);

    // the error seems to be here
    const findSearchedParcel = data.find((item) => item.title === query);

    // The found item is printed to the clg
    //console.log(input);
    //console.log(findSearchedParcel);


    return (
        <div>

        { !(findSearchedParcel === undefined) && <div>{findSearchedParcel.title}</div>}

        {findSearchedParcel === undefined && <div>Not Found</div>}

        {/* pull the card component and fill with the info and display */}

        </div>

    );
} 
