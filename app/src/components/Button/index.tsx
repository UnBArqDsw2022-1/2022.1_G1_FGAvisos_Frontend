import React from 'react';

import { ButtonStyle } from './styles';

interface ButtonProps {
  text: string;
  backgroundColor: string;
  colorFont: string;
  width: number;
  height?: number | undefined;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = ({...props}) => 
   (<ButtonStyle
        {...props}>{props.text}
    </ButtonStyle>);

export default Button;