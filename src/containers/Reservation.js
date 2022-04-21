import React, { useState } from 'react'
import db from '../assets/firebase'
import {collection, getDocs, query, doc, addDoc, deleteDoc, updateDoc} from 'firebase/firestore/lite'

const Reservation = () => {
    const [objReservation, setObjReservation]= useState({
        nombre:'',
        numero:'',
        fecha:'',
        hora:''
    });

    const{nombre, numero, fecha, hora}=objReservation;

    const [error, setError]= useState(false)

    const handleSubmit=(e)=>{ 
      e.preventDefault();  
      

    if([nombre, numero, fecha, hora].includes('')){
      setError(true);
      return; }

    crear(objReservation);
    setError(false);
    setObjReservation({ nombre:'',
    numero:'',
    fecha:'',
    hora:''})
    }

    const crear = async (objReservation)=>{
      await addDoc(collection(db, 'clientes'),{objReservation});
    }
   
  
    

    const handleChange=({target})=>{
        setObjReservation({...objReservation, [target.id]:target.value});
        console.log(objReservation)
    }

  return (
    <div className='reservation'>
      <h3>Reserva tu lugar</h3>
      <hr />

      {error &&  <p>todos los campos deben de ser llenados</p>}
      <form>
        <div className='divForm'>
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" type="text" value={nombre} onChange={handleChange} />
        </div>

        <div className='divForm'>
        <label htmlFor="numero">Numero de personas</label>
        <input id="numero" type="number" value={numero} onChange={handleChange}/>
        </div>

        <div className='divForm'>
        <label htmlFor="fecha">Fecha</label>
        <input id="fecha" type="date" value={fecha} onChange={handleChange}/>
        </div>

        <div className='divForm'>
        <label htmlFor="hora">Hora de reservación</label>
        <input id="hora" type="time" value={hora} onChange={handleChange}/>
        </div>

        <button onClick={handleSubmit}>reservar</button>

      </form>
    </div>

  )
}

export default Reservation
