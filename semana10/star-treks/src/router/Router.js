import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../componentes/HomePage";
import LoginPage from "../componentes/LoginPage";
import ListTripsPage from "../componentes/ListTripsPage";
import TripDetailsPage from "../componentes/TripDetailsPage";
import CreateTripPage from "../componentes/CreateTripPage";
import ErrorPage from "../componentes/ErrorPage";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path={"/trips/list"}>
          <ListTripsPage />
        </Route>
        <Route exact path={"/trips/details"}>
          <TripDetailsPage />
        </Route>
        <Route exact path={"/trips/create"}>
          <CreateTripPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;