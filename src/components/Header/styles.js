import { styled } from "styled-components";


export const HeaderContainer = styled.header`
    display: flex;
    width: auto;
    padding: 1.25rem;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme["gray-600"]};
    color: ${props => props.theme["gray-100"]};
    gap: 6px;

`;

export const Image = styled.img`

    width: 4rem;
    height: 3.75rem;
    background: ${props => props.theme["gray-600"]};

`

export const SpanHeaderContainer = styled.span`
    font-size: 1.5625rem;
    font-weight: bold;
    line-height: 1.6;
    color: ${props => props.theme["gray-100"]};
    background: ${props => props.theme["gray-600"]};

`

