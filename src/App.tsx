import React from "react";
import routes from "./routes/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './utils/rem'
import "./App.scss";
import './normalize.css'

interface RoutesFace {
  path: string;
  component: any;
}

const RouteWithSubRoutes = (route: RoutesFace) => (
  <Route path={route.path} render={(props) => <route.component {...props} />} />
);

const App = React.memo(function App() {
  return (
    <Router>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Router>
  );
});

export default App;
