import React from 'react'
import "./showWishList.css";
import {arr} from "./arr"

function showWishList() {
   let movielist=localStorage.getItem("wishlist");
   const obj=JSON.parse(movielist);
   
 // console.log(obj);
   
   //console.log(obj[0].Title);
   
   arr.push(obj);
console.log(arr);
console.log(arr.Title);
function delte(e){
  arr.pop(e);
}
    return(
      
    <div >
      <div className='header'>
      <div className='left'>
       
      <h1>WishList</h1></div>
      <div className='right'>
      <a href='/MovieCatelogue'><h2>Search</h2></a>
      </div>

    </div>
    {
       
        obj.map((index,i)=>{
            return <div className="card">
            <div className="card-details">
          <h3 key={i}>{index.Title}</h3>
          <img src={index.Poster}/>
         </div></div>
        })
        
    }
  </div>);
 

}

export default showWishList;