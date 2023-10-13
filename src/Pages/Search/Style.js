import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: #F1F1F1
`;

export const InputContainer = styled.div`
    width: 100%;
    height: 15vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SearchContainer = styled.div`
    width: 40%;
    height: 7vh;

    display: flex;
    align-items: center;

    background-color: #FFF;

    border-radius: 25px;

    padding-inline: 15px;
`;

export const IconContainer = styled.div`
    width: 10%
`;

export const Input = styled.input`
    width: 90%;
    height: 80%;

    border: none;

    outline: 0;

    font-size: 16px;
`;