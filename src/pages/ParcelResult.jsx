// Search Results
import React from 'react'

export default function ParcelResult({parcel}) {
    return (
        <div>
            {parcel.map(parcels => (<h1 key={parcel.id}>{parcel.status}</h1>))}
        </div>
    )
}
