import styled from 'styled-components';

interface TagProps{
    backgroundColor: string;
    colorFont: string;
    width: number;
}
export const TagStyle = styled.span<TagProps>`
    background: ${props => props.backgroundColor};
    color: ${props => props.colorFont};
    width: ${props => props.width}px;
    border-radius: 10px;
    text-align: center;
    height: 40px;
    padding: 7px 7px 7px 7px;
`;
