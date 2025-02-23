import React, {useState} from "react";


function LightSignals (){

    const [light, setLight] = useState(""); // useState para añadir o quitar la luz (lightWhite) a cada señal
    const [extra, setExtra] = useState(""); // useState para añadir o quitar una luz morada

    const changeButton = (e) => {
        const onOff = e.target.id;              // Estas variable permitira agregar o quitar el class "lightWhite"
        setLight(light === onOff ? "" : onOff); // Sin que haya más de una encendida a la vez
    }

    const newLight = () => {
        setExtra(extra === "" ? "purple" : ""); // Variable para añadir o eliminar la señal purpura
    };

    return(
        <>
            <div className='box'> {/* caja negra del semaforo */}
            <div onClick={changeButton} id="red" className={light === "red" ? "lightWhite" : ""}></div>
            <div onClick={changeButton} id="yellow" className={light === "yellow" ? "lightWhite" : ""}></div>
            <div onClick={changeButton} id="green" className={light === "green" ? "lightWhite" : ""}></div>
            <div onClick={changeButton} id={extra} className={light === "purple" ? "lightWhite" : ""}></div>
            </div>
            <button onClick={newLight}><strong>New Signal on/off</strong></button>
        </>
    );
};


export default LightSignals;

// Los condicinales de los <div> son "aplicar light sobre el id correspondiente (red, yellow, green o purple)"
// Solo aplicable de su valor no tiene nada ("") y en caso de tener "lightWhite" volver al valor inicial osea nada
// usando onClick con la variable "changeButton" activamos o desactivamos el "lightWhite" con un click
// mismamente onClick={newLight} permite añadir o eliminar la señal purpura

// Algo que no he podido encontrar solución es que si "lightWhite" esta activo en la luz purpura (id={extra})
// al eliminar esta luz se queda el "lightWhite" pero vacio, se elimina completamente al pulsar otra luz