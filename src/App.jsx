import "./App.css";
import Nav from "./components/Nav";
import { Route, Switch, useLocation } from "wouter";
import Landing from "./pages/Landing";

function App() {
  const [location, setLocation] = useLocation();

  return (
    <>
    <Nav inLanding={location === "/" ? true : false} ></Nav>
      <Switch>
        
        <Route path="/" component={Landing} />

        <Route path="/users/:name">
          {(params) => <>Hello, {params.name}!</>}
        </Route>

        {/* Default route in a switch */}
        <Route>404: No such page!</Route>
      </Switch>
    </>
  );
}

export default App;
