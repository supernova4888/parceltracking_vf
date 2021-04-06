import React from 'react'
import { useState} from "react";
import { useHistory } from "react-router-dom";

export default function Home() {

// State
const [query , setQuery] = useState({
    senderName: "",
    parcelID: "",
});

// Property
const history = useHistory();

//Functions
const handleSubmit = (e) => {
		e.preventDefault();
		history.push(`/searchresults/${query.senderName}:${query.parcelID}`);
	};

function search(data){
    return data.find((item) => item.title.toLowerCase() === query);
}

return (
     <div className="search">
            <h1>Parcel tracker</h1>
             {/* Input form and search button -> should send the input info to the 'Parcel Result page' */}

            {/* This is connected to the button  - To group tags*/}

                <input 
                type="text" 
                value={query} 
                onChange={(event) => setQuery(event.target.value)} />
                {/* To fire the event */}
                <input type="submit" value="Search" />
   

        </div>
    )
}