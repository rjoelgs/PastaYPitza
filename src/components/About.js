import React from 'react';

const About =()=>{
    return (
        <>
            <p id='style'>ItalianR es un restaurante que se especializa en la comida italiana, creando platos innovadores y deliciosos con los mas altos estándares de calidad.
            El compromiso principal de ItalianR es la satisfacción de las necesidades, expectativas y deseos de los clientes al ofrecerles un menú caracterizado por su variedad, sabor inigualable, altos niveles de calidad ademas del excelente servicio.</p>
            <br></br>
            <h3 style={{textAlign: 'center'}}>Encuentranos en la ciudad de Durango</h3>
            <div className="iframe">
            <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.859388725594!2d-104.66376529451246!3d24.025214188968803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bc817e61724d5%3A0x53ff3ef7639733bc!2sTemplo%20Expiatorio%20del%20Sagrado%20Coraz%C3%B3n%20de%20Jes%C3%BAs!5e0!3m2!1ses-419!2smx!4v1649957138891!5m2!1ses-419!2smx" width="600" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

export default About