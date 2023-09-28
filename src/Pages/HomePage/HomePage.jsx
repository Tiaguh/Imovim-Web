import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './img/logo.PNG'

import { Container, Img, TextContainer, Text, ButtonContainer, LoginButton, RegisterButton } from './Style.js'

export default function HomePage() {
    return (
        <Container>
            <Img src={Logo} alt="" />

            <TextContainer>

                <Text>
                    Seja bem vindo a rede social
                    brasileira de esportes!
                </Text>

                <Text>
                    Faça parte da rede que te
                    movimenta
                </Text>

            </TextContainer>

            <ButtonContainer>

                <Link to="/login">
                    <LoginButton>
                        Login
                    </LoginButton>
                </Link>

                <Link to="/register">
                    <RegisterButton>
                        Cadastre-se
                    </RegisterButton>
                </Link>

            </ButtonContainer>

        </Container>
    )
}