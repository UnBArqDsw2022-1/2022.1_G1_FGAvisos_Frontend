import React from 'react';
import { CaixaBuscaStyle, IconPesquisa } from './styles';
import Input from '../Input/index';
import PesquisaIcone from '../../assets/PesquisaIcone.svg';
import Tema from '../../utils/Tema';


const CaixaBusca: React.FC = ({/*history*/}) => {
    const [ehValido, setEhValido] = React.useState(false);
    const [input, setInput] = React.useState(false);

    const onSubmit = (data: any) => {
        if(data.key === undefined && ehValido)
            //history?.push(`/aviso/search/${data.trim()}`);
        if (data.key === 'Enter' && ehValido) {
            //history?.push(`/aviso/search/${data.target.value.trim()}`);
        }
    };

    const validate = (e: any) => {
        const value = e.target.value.trim();
        const tamanhoEhValido = value.length > 1 && value.length < 254;
        setInput(e.target.value);
        setEhValido(tamanhoEhValido);
    };

    return (
        <CaixaBuscaStyle>
            <Input 
                text='Buscar' 
                backgroundColor={Tema.colors.$secundariaEscura} 
                colorFont='white' 
                width='100%'
                onkeydown={onSubmit}
                onChange={validate} 
            />
            <IconPesquisa
                src={PesquisaIcone}
                alt="iconPesquisa"
                onClick={() => onSubmit(input)}
            />
        </CaixaBuscaStyle>
    );
}

export default CaixaBusca;