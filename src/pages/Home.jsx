import React from 'react'
import { useState} from "react";
import { useHistory } from "react-router-dom";

export const Home = () => {
// State
const imgURL = require("../assets/tracking.png");
const imgLogo = imgURL.default;
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
    <div className="home-search">
        <img src={imgLogo} alt="tracker"/>
            <div className="hometext">
            <h1>Parcel tracker</h1>
            <p className="line">Welcome to our prototype version! Use yourname and lastname to start.</p>
            </div>
            <div className="inputfields">
            <form onSubmit={handleSubmit}>
                <input className="input"
                    placeholder="[Name] [Lastname]"
					name="userName"
					value={query.userName}
                    onChange={handleChange}
                />
            <button>Search</button>
            </form>
            </div>
    </div>
    )
}