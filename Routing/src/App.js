import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.

export default function NestingExample() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/aboutus">
            <Aboutus />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/aboutus">AboutUs</Link>
        </li>
      </ul>
      <hr />
      <h2>Home</h2>
    </div>
  );
}

function Topics() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutus">AboutUs</Link>
        </li>
      </ul>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`/topics/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`/topics/components`}>Components</Link>
        </li>
        <li>
          <Link to={`/topics/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={"/"}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`/topics/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Aboutus() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/aboutus">Aboutus</Link>
        </li>
      </ul>
      <hr />
      <h1>AboutUS</h1>
      <h2>We are web developers</h2>
      <h2>Thank you Areeb sir for such a dedicated guidance.</h2>
    </div>
  );
}

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
