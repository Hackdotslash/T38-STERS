import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Hospitals from "./Components/Hospital/Hospitals";
import Camps from "./Components/Camps";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/hospitals" component={Hospitals} />
        <Route path="/camps" component={Camps} />
      </Switch>
    </div>
  );
}

export default App;
