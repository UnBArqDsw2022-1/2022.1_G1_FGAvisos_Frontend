
import styled from 'styled-components';

interface InputProps{
    backgroundColor: string;
    width: string;
    colorFont: string;
}
export const InputStyle = styled.input<InputProps>`
    background-color: ${props => props.backgroundColor};
    width: ${props => props.width};
    border: 0.5px ;
    border-radius: 5px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 50%);
    margin: 15px 0;
    height: inherit;
    padding: 7px 0px 7px 10px;
    font-size: 15px;
    color: ${props => props.colorFont};;
    &::-webkit-input-placeholder {
      color: ${props => props.colorFont};;
    }
`;



