import React from 'react';
import { VoltarBtnStyle, IconVoltar } from './styles';
import VoltarIcone from '../../assets/VoltarIcone.svg'

const VoltarBtn: React.FC = () => {
  return (
    <VoltarBtnStyle onClick={() => window.history.back()}>
        <IconVoltar 
            src={VoltarIcone}
            alt='iconVoltar'
        />
        Voltar
    </VoltarBtnStyle>
  );
}

export default VoltarBtn;