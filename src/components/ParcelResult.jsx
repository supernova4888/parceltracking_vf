export const ParcelResult = ( {item, match} ) => {
// code made to search for a specific parcel based on unique parcel ID. Since that data is not avaialable, the search parameter chosen is user name.
const userName = match.params.query
console.log(item)
console.log("userName:",userName)
const filteredList = item.filter(item => item.user_name === userName )
console.log("f",filteredList)

// change from 'parcel' to 'item'
const mappedFilteredList = filteredList.map(parcel => {
    return (<div className="searchresults" key={parcel.id}>
    <p className= "p-sender">Sender: {parcel.sender}</p>
    <p className= "p-status">Status: {parcel.status}</p>
    <p className= "p-eta">ETA: {parcel.eta.split("T")[0]}</p>
    <p className= "p-location">Location: {parcel.location_name}</p>
    </div>)
});

console.log(filteredList.length);

    return (
    <div className="resultlist">
    <h1 className="yourparcels">Your parcels</h1>
    {(filteredList.length>0 && mappedFilteredList) ||
    (filteredList.length===0 && <div className="sorry">Sorry, no boxes for you :(</div>)}
    </div>
    );
}