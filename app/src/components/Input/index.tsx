import React from 'react';

import { InputStyle } from './styles';

interface InputProps {
    text: string;
    backgroundColor: string;
    colorFont: string;
    width: string;
    register?: any;
    onkeydown?: any;
    onChange?: any;
    type?: string;
}

const Input: React.FC<InputProps> = ({register, ...props}) => (
    <InputStyle
        {...props}
        placeholder={props.text}
        onKeyPress={props.onkeydown}
        type={props.type}
        {...register}
    />
);

export default Input;