import styled from 'styled-components';

interface TagProps{
    backgroundColor: string;
    colorFont: string;
    width: number;
}
export const TagStyle = styled.div<TagProps>`
    display: inline-table;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.colorFont};
    border-radius: 10px;
    text-align: center;
    height: 16px;
    padding: 7px;
    margin-left: 0.5rem;
`;
