import React from 'react'
//import { ParcelCard } from "./ParcelCard";

export const ParcelResult = ( {item, match} ) => {
const parcelID = match.params.query.split(":")[1]
console.log(item)
console.log("parcelID",parcelID)
const filteredList = item.filter(item => item.userId == parcelID )
console.log("f",filteredList)

// why this map is here? because we need to return the data, react doesnt render it if we don't return it. I can wrap the details in the ParcelCard - but risk breaking the info flow again
const mappedFilteredList = filteredList.map(parcel => {
    return (<div key={parcel.id}>
    <p>{parcel.title}</p>
    <p>{parcel.status}</p>
    <p>{parcel.sender}</p>
    </div>)
});
console.log(filteredList);


    return (
    <div>
    
	{mappedFilteredList}

        {/* if list is empty then display another message */}

        {/* { !(findSearchedParcel === undefined) && <div>{findSearchedParcel.title}</div>}

        {findSearchedParcel === undefined && <div>Not Found</div>} */}
        </div>
    );
    }