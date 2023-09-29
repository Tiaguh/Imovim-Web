import React from 'react';
import Logo from './img/logo.PNG';

import { Link } from 'react-router-dom';

import { Container, LogoContainer, Img, LoginContainer, TitleContainer, Title, Form, Input, ButtonContainer, Button, RegisterContainer, Text, Register } from './Style.js'

export default function Login() {
    return (
        <Container>

            <LogoContainer>
                <Img src={Logo} alt="logo" />
            </LogoContainer>

            <LoginContainer>

                <TitleContainer>
                    <Title>Login</Title>
                </TitleContainer>

                <Form>

                    <Input
                        type="email"
                        placeholder="Email"
                    />

                    <Input
                        type="email"
                        placeholder="Senha"
                    />

                </Form>

                <ButtonContainer>

                    <Link to="/feed">
                        <Button>Entrar</Button>
                    </Link>

                </ButtonContainer>

                <RegisterContainer>
                    <Text>Não possui cadastro?</Text>
                    <Register>Cadastre-se aqui</Register>
                </RegisterContainer>

            </LoginContainer>


        </Container>
    )
}