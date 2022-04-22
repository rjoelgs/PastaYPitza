import React, { useEffect, useState } from 'react';
import {getDocs, collection} from 'firebase/firestore/lite';
import db from '../assets/firebase';



const Reservaciones = () => {

    const[mesas, setMesas]= useState();

    useEffect(()=>{
      getItems(db)
  },[mesas])

    async function getItems(db){
        const itemsCol = collection(db, 'clientes');
        const itemsSnapshot = await getDocs(itemsCol, 'snapshot');
        const itemsList = itemsSnapshot.docs.map(doc => doc);
        return setMesas(itemsList);}

    


  return (
    <div className='reservation'>
       <h3>Reservaciones</h3>
      <hr />

      {mesas && mesas.map( mesa =>{
        
        return (<div className='card' key={mesa._key.path.segments[6]}>
              <p>Nombre:{' '}{mesa.data().objReservation.nombre}</p>
              <p>Numero de personas: {' '}{mesa.data().objReservation.numero}</p>
              <p>fecha: {' '}{mesa.data().objReservation.fecha}</p>
              <p>Hora: {' '}{mesa.data().objReservation.hora}</p>
        </div>)
      })}

    </div>
  )
}

export default Reservaciones
