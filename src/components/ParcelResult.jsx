import React from 'react'
import { ParcelCard } from "./ParcelCard";


export const ParcelResult = ({ item }) => {
    //const parcelArray = data.map((item) => <li key={item.id}>{item.title}</li>);

    // dummy variable to "find"
    //const searchedParcel = "et porro tempora";

    // the error seems to be here
    // const findSearchedParcel = data.find((item) => item.title === query);

    // The found item is printed to the clg
    //console.log(input);
    //console.log(findSearchedParcel);


    return (
        <div>
            <item>

				<h1>{`resultCards.parcelID`}: {item.parcel_id}</h1>
				<h2>Status: {`resultCards.status.${item.status}`}</h2>
				<h2>{`resultCards.from`}: {item.sender}</h2>
			</item>

        {/* { !(findSearchedParcel === undefined) && <div>{findSearchedParcel.title}</div>}

        {findSearchedParcel === undefined && <div>Not Found</div>} */}

        {/* pull the card component and fill with the info and display */}

        </div>

    );
    }