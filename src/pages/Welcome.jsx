import React from 'react'
import Tracker from "../components/Tracker";
import { useState , useHistory} from "react";

// Welcome page has a search bar, that calls 'link' to the other page where the 'fetch-parcelid-match' data is shown

export default function Welcome() {
// State
const [query, setQuery] = useState("");

// Property
//const logoObject = require (...);
//const logoURL = logoObject.default;
// for being able to return to the previous page
const history = useHistory();

// Methods
function onSearch(event) {
    event.preventDefault();
    // confirm what this line does
    history.push(`/results/${query}`);
}

    return (
        <div>
        {/* Update to logoURL */}
        <img src="#" alt="Welcome-img"/>
        <h1>Parcel tracker</h1>

        {/* Search bar */}
        <p>Enter your parcel id to start</p>
        <input  type="text"/>
        <form onSubmit={onSearch} className="search-bar">
            <input type="text" placeholder="Search by parcel id" value={query} 
            onChange={(event) => setQuery(event.target.value)} />
            <input type="submit" value="Search"/>
        
        </form>

        <Tracker />

        </div>
    )
}
