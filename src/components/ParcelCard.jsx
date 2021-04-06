import React from 'react'

export default function ParcelCard ({item}) {
    // Constants
    const { title, completed } = item;
    
    return (
        <div className="task-item">
            <h1>{item.parcel_id}</h1>
            <p>{("parcelDetails.from")}: {item.sender} </p>
			<p>{("parcelDetails.to")}: {item.user_name}</p>
			<p>{("parcelDetails.pickupLocation")}: {item.location_name}</p>
			<p>{("parcelDetails.eta")}: {item.eta}</p>
			<p>Status: {`resultCards.status.${item.status}`}</p>
            <p>{("parcelDetails.lastUpdated")}: {item.last_updated}</p>  
        </div>
    )
}
