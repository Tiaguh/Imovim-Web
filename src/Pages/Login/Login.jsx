import React from 'react';
import Logo from './img/logo.PNG'

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

                {/* <p>Esqueci minha senha</p> */}

                <ButtonContainer>
                    <Button>Entrar</Button>
                </ButtonContainer>

                <RegisterContainer>
                    <Text>Não possui cadastro?</Text>
                    <Register>Cadastre-se aqui</Register>
                </RegisterContainer>

            </LoginContainer>


        </Container>
    )
}