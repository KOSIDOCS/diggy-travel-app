import './App.css';
import Wrapper from './components/applyform/Wrapper'
import Progress1 from "./components/progressbar1/Progress1"
import Progress2 from "./components/progressbar2/Progressbar2"
import Progress3 from "./components/progressbar3/Progressbar3"
import Progress4 from "./components/progressbar4/Progressbar4"
import Progress5 from "./components/progressbar5/Progressbar5"
import Progress6 from "./components/progressbar6/Progressbar6"
import Progress7 from "./components/progressbar7/Progressbar7"
import ReviewDetails from "./components/detail/ReviewDetails"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/step/1">
          <Progress1 />
        </Route>
        <Route exact path="/step/2">
          <Progress2 />
        </Route>
        <Route exact path="/step/3">
          <Progress3 />
        </Route>
        <Route exact path="/step/4">
          <Progress4 />
        </Route>
        <Route exact path="/step/5">
          <Progress5 />
        </Route>
        <Route exact path="/step/6">
          <Progress6 />
        </Route>
        <Route exact path="/step/7">
          <Progress7 />
        </Route>
        <Route exact path="/step/deatils">
          <ReviewDetails />
        </Route>
        <Route exact path="/">
          <Wrapper />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
