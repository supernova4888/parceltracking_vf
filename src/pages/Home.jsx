import React from 'react'
import { useState} from "react";
import ParcelResult from './ParcelResult';
import FetchData from './FetchData';

// This is the landing page with search field. It should contain a router to the next page.

export default function Home() {

const [query , setQuery] = useState("");

// State
function onSearch(event) { 
    event.preventDefault();
   <ParcelResult input={query} />
}


return (
     <div className="search">
            <h1>Parcel tracker</h1>
             {/* Input form and search button -> should send the input info to the 'Parcel Result page' */}

            {/* This is connected to the button  - To group tags*/}
            <form onSubmit={onSearch}>
                <input 
                type="text" 
                value={query} 
                onChange={(event) => setQuery(event.target.value)} />
                {/* To fire the event */}
                <input type="submit" value="Search" />
            </form>

        </div>
    )
}