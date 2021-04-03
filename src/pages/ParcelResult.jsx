// Search Results
import React from 'react'

export default function ParcelResult({data}) {
    const parcelArray = data.map((item) => <li key={item.id}>{item.title}</li>);

    // dummy variable to "find"
    const searchedParcel = "et porro tempora";
    // et porro tempora

    // use data.find to find it in the data array
    const findSearchedParcel = data.find((item) => item.title === searchedParcel);
    
    // The found item is printed to the clg
    //console.log(findSearchedParcel.title);


    return (
        <div>
        { !(findSearchedParcel === undefined) && <div>{findSearchedParcel.title}</div>}

        {findSearchedParcel === undefined && <div>Not Found</div>}
        </div>

    );
} 
