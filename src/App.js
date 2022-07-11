

import React, { useState,useEffect } from "react";import { Route, BrowserRouter, Switch } from "react-router-dom";

import MovieCatelogue from "./component/MovieCatelogue";

import axios from "axios";
import "./App.css";
import Registeration from "./component/registeration";
import Loginn from "./component/login";
import LoadingScreen from "./component/LoadingScreen";
import showWishList from "./component/showWishList";


function App() {
  

    return (
      <>
      
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Registeration} />
        <Route path="/MovieCatelogue" exact component={MovieCatelogue} />
        <Route path="/ShowWish" exact component={showWishList}/>
        <Route path="/login" exact component={Loginn}/>
      </Switch>
    </BrowserRouter>
    </>
  );

}

export default App;
