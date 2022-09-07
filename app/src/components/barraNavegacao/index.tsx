import React from "react";
import * as barra from './styles';
import logo from '../../assets/FGAvisosLogoClara.svg'

const BarraNavegacao = () => {
    return (
        <barra.Barra>
            <barra.Logo style={{ backgroundImage: `url(${logo})` }}/>
        </barra.Barra>

    );

}

export default BarraNavegacao
