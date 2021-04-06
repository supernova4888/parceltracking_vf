import React from 'react'

// changes this from 'function' to const
export const ParcelCard = ({item}) => {
    // Constants
    //const { title, completed } = item;
    
    return (
        <div className="parcel-card">
            {/* {/* something wrong with this entire piece of code/} */}
            <h1>{item.parcel_id}</h1>
            {/* <p>{("parcelCard.from")}: {item.sender} </p>
			<p>{("parcelCard.to")}: {item.user_name}</p>
			<p>{("parcelCard.pickupLocation")}: {item.location_name}</p>
			<p>{("parcelCard.eta")}: {item.eta}</p>
			<p>Status: {`parcelResult.status.${item.status}`}</p>
            <p>{("parcelCard.lastUpdated")}: {item.last_updated}</p>   */}
        </div>
    )
}