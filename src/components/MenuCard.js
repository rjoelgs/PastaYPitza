import React, { useEffect, useState } from 'react';
import db from '../assets/firebase'
import {collection, getDocs} from 'firebase/firestore/lite'

const MenuCard =()=>{
    
    const [food, setFood]= useState()

    async function getItems(db){
    const itemsCol = collection(db, 'alimentos');
    const itemsSnapshot = await getDocs(itemsCol, 'snapshot');
    const itemsList = itemsSnapshot.docs.map(doc => doc.data());
    return setFood(itemsList);
    }

    useEffect(()=>{
        getItems(db)

    },[])


    return (<>
      {food && food.map(alimento=>{
          return (<><p>{alimento.description}</p>
                    <p>{alimento.precio}</p>
          </>)
      })}
    
    </>)
}

export default MenuCard;