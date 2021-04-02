// Search Results
import Welcome from "./Welcome";
import React from 'react'

export default function ParcelResult({data}) {
    const parcelArray = data.map((item) => <li key={item.id}>{item.title}</li>);

    return (
        <div>
        {parcelArray}
        </div>
    )
}
