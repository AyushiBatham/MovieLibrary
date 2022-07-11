import React, { useState } from "react";
import axios from "axios";

function ListOfMovies(props) {
    return(
      <>
      console.log(props.Title)
      <h2>{props.Title}</h2>
    </>
  );
}

export default ListOfMovies;