

import React, { useState } from "react";import { Route, BrowserRouter, Switch } from "react-router-dom";

import MovieCatelogue from "./component/MovieCatelogue";

import axios from "axios";
import "./App.css";
import Registeration from "./component/registeration";
import loginn from "./component/login";

import showWishList from "./component/showWishList";


function App() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Registeration} />
        <Route path="/MovieCatelogue" exact component={MovieCatelogue} />
        <Route path="/ShowWish" exact component={showWishList}/>
      </Switch>
    </BrowserRouter>
  );

}

export default App;
