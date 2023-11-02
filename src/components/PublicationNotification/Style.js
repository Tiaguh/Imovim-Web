import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 120px;

    display: flex;
    align-items: center;

    background-color: #F1F1F1;

    padding-inline: 25px;
`;

export const PhotoContainer = styled.div`
    width: 90px;
    height: 90px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    border-radius: 50px;
    border: 2px solid #FFF;
    
    background-color: #D9D9D9;

    margin-inline: 25px
`;

export const UserName = styled.h1`
    font-size: 25px;
    font-family: sans-serif;
`;

export const Action = styled.h1`
    font-size: 25px;
    font-family: sans-serif;
    font-weight: normal;
`