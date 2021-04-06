import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";
import { ParcelResult } from "./components/ParcelResult";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {useState, useEffect} from 'react'
// TODO import styles

export default function App() {
// Constants
const [status, setStatus] = useState(0);
const [parcels, setParcels] = useState([]);
const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";
//"https://jsonplaceholder.typicode.com/todos/";

// Methods - query the data and pass to JSON format
useEffect(() => {
    fetch(API_URL)
    .then((response) => response.json())
    .then((json) => onFetchSuccess(json))
    .catch((error) => onFetchFail(error));
}, [setParcels, setStatus]);

function onFetchSuccess(json) {
    setParcels(json);
    setStatus(1);
}
function onFetchFail(error){
    console.log("Error", error);
    setStatus(2);
}

  return (  
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route render={(props) => <ParcelResult match={props.match} item={parcels}/>} 
          path="/parcelresults/:query" />
        </Switch>
      </Router>
    </div>
  );
}