import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-color:#A512BD;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 50px
`;

export const Img = styled.img`
    width: 30%
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;
`;

export const Text = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 25px;

    color: #FFF;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 10px
`;

export const LoginButton = styled.button`
    width: 220px;
    height: 50px;

    border: none;

    background-color: #FF7926;

    font-family: 'Roboto', sans-serif;
    font-size: 20px;

    color: #FFF;

    border-radius: 10px;

    cursor: pointer;
`;

export const RegisterButton = styled.button`
    width: 220px;
    height: 50px;

    border: 2px solid #FF7926;

    background-color: transparent;

    font-family: 'Roboto', sans-serif;
    font-size: 20px;

    color: #FFF;

    border-radius: 10px;

    cursor: pointer;
`;