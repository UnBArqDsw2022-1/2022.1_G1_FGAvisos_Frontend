import React from 'react';

import { TagStyle } from './styles';

interface TagProps {
    text: string;
    backgroundColor: string;
    colorFont: string;
    width: number;
}

const Tag: React.FC<TagProps> = ({...props}) => 
   (<TagStyle
        {...props}>{props.text}
    </TagStyle>);

export default Tag; 
