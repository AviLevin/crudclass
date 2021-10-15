import "./App.css";
import Users from "./components/Users/Users";
import User from "./components/User";
import Nav from "./components/Nav";
import About from "./components/About";
// import User1 from "./components/User1";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Users />
          </Route>

          <Route path="/users/:id" render={(props) => <User {...props} />} />

          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
