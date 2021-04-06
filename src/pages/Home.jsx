import React from 'react'
import { useState} from "react";
import { useHistory } from "react-router-dom";

export const Home = () => {
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
		history.push(`/parcelresults/${query.senderName}:${query.parcelID}`);
    };
    

const handleChange = ({ target }) => {
		setQuery({ ...query, [target.name]: target.value });
	};

return (
    <div className="search">
            <h1>Parcel tracker</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Type your parcel ID"
					name="parcelID"
					value={query.parcelID}
                    onChange={handleChange}
                />

            <button>Search</button>
            </form>

        </div>
    )
}