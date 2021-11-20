import Analyse from "./components/Analyse";
import Home from "./components/Home"
import More from "./components/More";
import "./styles/app.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' exact component={Home} />
          <Route exact path='/analyse' exact component={Analyse} />
          <Route exact path='/more' exact component={More} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
