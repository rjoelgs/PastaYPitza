import React from 'react';
import imagen from '../assets/food.jpg'

const Main =()=>{
    return(
        <div className="main">
           <h2 className="neon">Open All Day</h2>
           <img src={imagen} alt='restaurante italiano' />
        </div>
    )
}

export default Main
