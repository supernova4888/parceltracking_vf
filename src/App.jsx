import Home from "./pages/Home"
import Nav from "./components/Nav";
import React from 'react'
import FetchData from "./pages/FetchData";
import ParcelResult from "./pages/ParcelResult";

export default function App() {
  
  return (  
    <div className="App">
    
    {/* <Nav /> */}
    {/* Recoil root: to define the global variables - WRAPS ALL parent or child that needs access to the global state*/}
    <Home />
  
    </div>
  );
}