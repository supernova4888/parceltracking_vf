// Search Results
import React from 'react'
import { useState, useEffect } from "react";

export default function ParcelResult({data, input}) {
    //const parcelArray = data.map((item) => <li key={item.id}>{item.title}</li>);

    // dummy variable to "find"
    //const searchedParcel = "et porro tempora";

    // the error seems to be here
    const findSearchedParcel = data.find((item) => item.title === input);

    // The found item is printed to the clg
    console.log(input);
    console.log(findSearchedParcel);


    return (
        <div>
        { !(findSearchedParcel === undefined) && <div>{findSearchedParcel.title}</div>}

        {findSearchedParcel === undefined && <div>Not Found</div>}

        {/* pull the card component and fill with the info and display */}

        </div>

    );
} 
