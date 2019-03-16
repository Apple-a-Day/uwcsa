import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./styles/App.scss";

// NOTE: Upcoming will be our home page
const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />

        <Switch>
          <Route path="/upcoming" component={Upcoming} />
          <Route path="/about" component={About} />
          <Route path="/events" component={Events} />
          <Route path="/team" component={Team} />
          <Route path="/sponsors" component={Sponsors} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/upcoming" />
        </Switch>
      </div>
    </Router>
  );
}

const Upcoming = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

const Events = () => {
  return (
    <div>
      <h2>Events</h2>
    </div>
  );
}

const Team = () => {
  return (
    <div>
      <h2>Team</h2>
    </div>
  );
}

const Sponsors = () => {
  return (
    <div>
      <h2>Sponsors</h2>
    </div>
  );
}

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}

// const Topics = ({ match }) => {
//   return (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>

//       <Route path={`${match.path}/:topicId`} component={Topic} />
//       <Route
//         exact
//         path={match.path}
//         render={() => <h3>Please select a topic.</h3>}
//       />
//     </div>
//   );
// }

// const Topic = ({ match }) => {
//   return (
//     <div>
//       <h3>{match.params.topicId}</h3>
//     </div>
//   );
// }

export default App;