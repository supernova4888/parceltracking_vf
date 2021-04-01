import "./pages/Welcome";
import "./pages/ListOfParcels";
import "./pages/ParcelDetails";
import React from 'react'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="#" alt="Welcome-img"/>
        <h1>Parcel tracker</h1>
        <p>Enter your parcel id to start</p>

        <input placeholder="Search by parcel id" type="text"/>
      </header>


    </div>
  );
}
