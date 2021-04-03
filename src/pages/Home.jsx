import React from 'react'
import { useState } from "react";
import ParcelResult from './ParcelResult';

// This is the landing page with search field. It should contain a router to the next page.

export default function Home() {
const [parcelid, setParcelId] = useState("");

// function onSubscribe(event){
//     event.preventDefault();
//     <ParcelResult searchedParcel = {parcelid} />;
// }

function onName(event) {
    setParcelId(event.target.value);
}


    return (
        <div>
            <h1>Parcel tracker</h1>
            {/* Input form and search button -> should send the input info to the 'Parcel Result page' */}

            {/* This is connected to the button */}
            <form>
                <input type="text" value={parcelid} onChange={(event) => onName(event)}/>

                <button>Search</button>


            </form>


            {/* Router to the Parcel Result page */}
        </div>
    )
}

