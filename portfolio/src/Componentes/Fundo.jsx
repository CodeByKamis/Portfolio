import React from "react";
import FundoImg from '../assets/efeito_orangeandpink.png';
import estilos from '../Componentes/Fundo.module.css'
export function Fundo(){
    return(
        <>
        <img className={estilos.imagem} src={FundoImg} alt="fundo laranja e rosa" />
        </>
    )
}