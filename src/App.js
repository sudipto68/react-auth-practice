import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import ErrorPage from "./Components/ErrorPage";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import { createContext, useState } from "react";
import Destination from "./Components/Destination/Destination";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import SearchResult from "./Components/SearchResult/SearchResult";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <p>name: {loggedInUser.name}</p>
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <PrivateRoute path="/destination/:vechicleId">
              <Destination />
            </PrivateRoute>
            <Route path="/search">
              <SearchResult />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
