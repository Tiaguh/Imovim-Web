import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-color:#A512BD;

    display: flex;
    align-items: center;

    flex-direction: column;
`;

export const LogoContainer = styled.div`
    width: 100%;
    height: 15%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.img`
    width: 15%
`;

export const TitleContainer = styled.div`
    width: 100%;
    height: 25%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 28px;

    color: #FFF;
`;

export const RegisterContainer = styled.div`
    width: 30%;
    height: 80%;

    display: flex;
    flex-direction: column;

    background-color: rgba(0,0,0,0.3);

    border-radius: 15px;
`;

export const Form = styled.div`
    width: 100%;
    height: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 25px;
`;

export const Input = styled.input`
    width: 80%;

    padding: 6px;

    border: none;
    border-bottom: 2px solid #FFF;

    background-color: transparent;

    font-family: 'Roboto', sans-serif;
    font-size: 20px;

    color: #FFF;

    &::placeholder {
        color: #FFF;
        font-size: 20px;
  }
`;

export const ButtonContainer = styled.div`
    width: 100%;
    height: 15%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    width: 50%;
    height: 50px;

    background-color: #FF7926;

    border-radius: 10px;
    border: none;

    font-family: 'Roboto', sans-serif;
    font-size: 20px;

    color: #FFF;

    cursor: pointer;
`;

export const LoginContainer = styled.div`
    width: 100%;
    height: 30%;    

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    gap: 10px;
`;

export const Text = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;

    color: #FFF;
`;

export const Register = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;

    color: #FF7926;
`;