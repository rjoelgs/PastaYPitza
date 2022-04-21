import React, { useEffect, useState } from 'react';
import db from '../assets/firebase'
import {collection, getDocs} from 'firebase/firestore/lite'
import Card from './Card'

const MenuCard =()=>{
    
    const [food, setFood]= useState();
    const [beverage, setBeverage]= useState();

    async function getItems(db){
    const itemsCol = collection(db, 'alimentos');
    const itemsSnapshot = await getDocs(itemsCol, 'snapshot');
    const itemsList = itemsSnapshot.docs.map(doc => doc);
    console.log('1');
    return setFood(itemsList);
    
    }

    async function getBeverage(db){
    const itemsCol = collection(db, 'bebidas');
    const itemsSnapshot = await getDocs(itemsCol, 'snapshot');
    const itemsList = itemsSnapshot.docs.map(doc => doc);
    console.log('2');
    return setBeverage(itemsList);
    }

    useEffect(()=>{
        getItems(db)
    },[])

    useEffect(()=>{
        getBeverage(db)
    },[])


    return (<>
          <h2 id="separador">alimentos</h2>
          <table>
              <tbody>
                  
                     {food && food.map(alimento=>{
                     return <Card key={alimento._key.path.segments[6]} data={alimento.data()} />})}
                  
              </tbody>
          </table>

          <h2>bebidas</h2>
          <table>
              <tbody>
                   
                     {beverage && beverage.map(bebida=>{
                     return  <Card key={bebida._key.path.segments[6]} data={bebida.data()} /> })}
                    
              </tbody>
          </table>

    </>)
}

export default MenuCard;