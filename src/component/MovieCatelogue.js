import React, { useState } from "react";

import axios from "axios";
import "./MovieCatelogue.css";
import "./ListOfMovies";
import ListOfMovies from "./ListOfMovies";
//import { movielist } from "./movielist";
import { Link } from "react-router-dom";
import showWishList from "./showWishList";
import { Redirect } from "react-router-dom";


function MovieCatelogue() {
  const [movieList,setMovieList]=useState([]);
  const [inputTexts,setInputTexts]=useState("");
  const [movieArrays,setMovieArrays]=useState([]);
 
  const movielist=[];
  const changeInputData=(event)=>{
    setInputTexts(event.target.value)
  }

  const getMovies=(e)=>{
    e.preventDefault();

    axios.get(`https://www.omdbapi.com/?s=${inputTexts}&apikey=56155439`)
    .then((moviesdetails)=>{
      console.log(moviesdetails.data.Search);
      setMovieArrays(moviesdetails.data.Search);
    })
  }

  const addToList=(poster,title)=>{
   /*
   console.log(event)
    setMovieList(movieList => [...movieList, e]);

    console.log(movieList)*/
    const user = {
     Title:title,
     Poster:poster
    };
    
    movielist.push(user);
    alert("Added to Wishlist");
    
    localStorage.setItem("wishlist",JSON.stringify(movielist));

    
    
    console.log("movielist",movielist);

  }
  function showWi(){
    <Link to="/ShowWish" ></Link>
  }

  return (
    <>
    
    <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand">MOVIE-LIBRARY</a>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a href="/ShowWish" ><div class="nav-link_active" aria-current="page"  >Home</div></a>
        </li>
    </ul>
    <form class="d-flex" role="search" onSubmit={getMovies}>
      <input class="form-control me-2" type="search" placeholder="Enter Movie Name" aria-label="Search" value={inputTexts} onChange={changeInputData}/>
      <button class="btn btn-outline-success" type="submit" >Search</button>
     
    </form>
    
  </div>
</nav>
{
     
      movieArrays.map((moviedata,index)=>{

        return <div className="card">
          <div className="card-details">
          <h3 key={index}>{moviedata.Title}</h3>
          <img src={moviedata.Poster}/>
          
          <button onClick={(event)=>addToList(moviedata.Poster,moviedata.Title)}>Add To List</button>
          
          </div></div>
      })

      
    }
    </>
  );
}

export default MovieCatelogue;
