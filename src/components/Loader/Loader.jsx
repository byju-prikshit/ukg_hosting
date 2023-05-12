import React from "react";
import "./Loader.scss"

function Loader({displayLoader})
{
 let displayStyle= displayLoader===true?'block':'none';

    return (
      <div className='loader-container' style={{ display: displayStyle }}>
        {' '}
        <div className='loading'></div>
      </div>
    )
}

export default Loader;