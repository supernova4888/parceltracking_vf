import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";
import { ParcelResult } from "./components/ParcelResult";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// TODO import styles

export default function App() {
  
  return (  
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route component={Home} path="/" exact />
					<Route component={ParcelResult} path="/parcelresults/:query" />
        </Switch>
      </Router>
    </div>
  );
}