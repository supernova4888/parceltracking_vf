import React from 'react'
//import { ParcelCard } from "./ParcelCard";

export const ParcelResult = ( {item, match} ) => {
// code made to search for a specific parcel based on unique parcel ID. Since that data is not avaialable, the search parameter chosen is user name.
const userName = match.params.query
console.log(item)
console.log("userName:",userName)
const filteredList = item.filter(item => item.user_name == userName )
console.log("f",filteredList)

const mappedFilteredList = filteredList.map(parcel => {
    return (<div key={parcel.id}>
    <p>{parcel.status}</p>
    <p>{parcel.sender}</p>
    <p>{parcel.eta.split("T")[0]}</p>
    <p>{parcel.location_name}</p>
    </div>)
});
console.log(filteredList);


    return (
    <div>
    <h1>Your parcels</h1>
	{mappedFilteredList}
    {mappedFilteredList === undefined && <div>Not Found, please try again later.</div>}
    </div>
    );
}