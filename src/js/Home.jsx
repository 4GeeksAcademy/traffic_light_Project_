import React from 'react';

import LightSignals from './components/Signals';

function Home (){
    return(
        <>
            <div className='centered'> {/* Centrado del "box" del semaforo */}
                    < LightSignals />
            </div>
        </>
    )
};

export default Home;


// En principio tenia pensado dividir las luces y en otro componente la caja (box) de las señales (signals)
// pero al final todo termino en un solo componente, lo mismo ocurrio con la luz purpura que en principio la
// iba a poner en un componente aparte pero vi que me daba un error y
// con el mismo codigo no me la daba acoplando todo en uno

//Comentario añadido para la entrega de Proyecto Lineamientos