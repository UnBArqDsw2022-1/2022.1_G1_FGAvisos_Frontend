import React from 'react';

import { InputStyle } from './styles';

interface InputProps {
    text: string;
    backgroundColor: string;
    colorFont: string;
    width: number;
}

const Input: React.FC<InputProps> = ({...props}) => (
    <InputStyle
       {...props}
       placeholder={props.text}
    />
);

export default Input;

