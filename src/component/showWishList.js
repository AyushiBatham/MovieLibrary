import React from 'react'


function showWishList() {
   let movielist=localStorage.getItem("wishlist");
   const obj=JSON.parse(movielist);
  console.log(obj);
   
   //console.log(obj[0].Title);
   const arr=[];
   arr.push(obj);
console.log(arr)
    return(

    <div>
    {
       
        arr.map((index)=>{
            return <div>
          <h3 key={index}>{index.Title}</h3>
          <img src={index.Poster}/>
          <button >delete from List</button>
         </div>
        })
    }
  </div>);

}

export default showWishList;