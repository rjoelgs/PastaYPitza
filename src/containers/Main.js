import React from 'react';
import imagen from '../assets/food.jpg'

const Main =()=>{
    return(
        <>
           <h2 style={{position:"absolute", color:"white"}}>Ningun hombre esta solo, mientras come Pizza</h2>
           <img src={imagen} alt='restaurante italiano' />
        </>
    )
}

export default Main
