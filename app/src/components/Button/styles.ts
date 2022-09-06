import styled from 'styled-components';

interface ButtonProps {
  backgroundColor: string;
  colorFont: string;
  width: number;
  height: number;
}

export const ButtonStyle = styled.button<ButtonProps>`
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.colorFont};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border: 0.5px;
  border-radius: 7px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 50%);
  text-align: center;
  padding: 7px 0px 7px 0px;

  :hover {
    opacity: 80%;
    cursor: pointer;
  }
`;