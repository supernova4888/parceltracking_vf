import React from 'react'
import "../components/Tracker";

export default function Welcome() {
    return (
        <div>
        <img src="#" alt="Welcome-img"/>
        <h1>Parcel tracker</h1>
        <p>Enter your parcel id to start</p>
        <input placeholder="Search by parcel id" type="text"/>
        <Tracker />

        </div>
    )
}
