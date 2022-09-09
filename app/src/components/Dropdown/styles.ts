import styled from "styled-components";
import {Tema} from '../../utils/Tema';

interface DropDownProps {
    OnChangeFunction?: () => void;
    optionList: string[];
    width: string;
    heigth: string
}

export const Dropdown = styled.select<DropDownProps>`
    width: ${props => props.width};
    height: ${props => props.heigth};
    background: ${Tema.colors.$secundariaClara};
    border-radius: 5px;
    color: #fff;
    font-size: 15px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 50%);
    display: flex;
    text-align: start;
    padding: 7px 0px 7px 10px;
`;
