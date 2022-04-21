import React from 'react';

const Card =({data})=>{
    return (<tr>
        <td>{data.description}</td>
        <td>${data.precio}</td>
        
    </tr>)
}

export default Card