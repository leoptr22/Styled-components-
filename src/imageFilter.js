import React from "react"
import salud from "./assets/images/salud.svg"
import otros from "./assets/images/otros.svg"
import transporte from "./assets/images/transporte.svg"
import utilidades from "./assets/images/utilidades.svg"
import alimentacion from "./assets/images/alimentacion.svg"


import {Icono} from "./Components/Ui/Index";


export default (type) => {
    const Images ={
        Restaurante:<Icono src={alimentacion} alt="Restaurante" />,
        Salud:<Icono src={salud} alt="salud" />,
        Otros:<Icono src={otros} alt="otros" />,
        Transporte:<Icono src={transporte} alt="Transporte" />,
        Utilidades:<Icono src={utilidades} alt="utilidades" />,
        default: <Icono src= {otros} alt="otros" />

    }
    return Images[type] || Images["default"];
};

//no me aparecen los iconos