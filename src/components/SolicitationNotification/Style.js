import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 125px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #F1F1F1;

    padding-inline: 25px;
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center
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

export const UserDescribe = styled.div`
    display: flex;
    flex-direction: column
`;

export const UserName = styled.h1`
    font-size: 25px;
    font-family: sans-serif;
`;

export const City = styled.h1`
    font-size: 25px;
    font-family: sans-serif;
    font-weight: normal;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 8px;
`

export const AcceptButton = styled.button`
    width: 180px;
    height: 50px;

    background-color: #8B04A2;

    border: none;
    border-radius: 10px;
    
    font-size: 18px;
    color: #FFF;

    cursor: pointer
`;

export const DeleteButton = styled.button`
    width: 180px;
    height: 50px;

    background-color: #E1E1E1;

    border: none;
    border-radius: 10px;

    font-size: 18px;
    color: #000;

    cursor: pointer
`;