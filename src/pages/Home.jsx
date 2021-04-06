import React from 'react'
import { useState} from "react";
import { useHistory } from "react-router-dom";

export const Home = () => {
// State
const [query , setQuery] = useState({
    userName: ""
});

// Property
const history = useHistory();

//Functions
const handleSubmit = (e) => {
		e.preventDefault();
        history.push(`/parcelresults/${query.userName}`);
    };
    
const handleChange = ({ target }) => {
		setQuery({[target.name]: target.value });
	};

return (
    <div className="Home-search">
            <h1>Parcel tracker</h1>
            <p>Welcome to the prototype version! Log in with name and lastname to find your parcels.</p>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="[Name] [Lastname]"
					name="userName"
					value={query.userName}
                    onChange={handleChange}
                />
            <button>Search</button>
            </form>
        </div>
    )
}