import React from 'react'

function showWishList(arr) {
    return(
    <div>
    console.log(arr);
    {
        
        arr.map((title,poster)=>{
            return <div className="card"><h2>dhhujd</h2>
          <div className="card-details">
          <h3 key={title}>{title}</h3>
          <img src={poster}/>
          <button >delete from List</button>
          </div></div>
        })
    }
  </div>);
}

export default showWishList;