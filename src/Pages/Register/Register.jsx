import React from 'react';
import Logo from './img/logo.PNG'

import { Container, LogoContainer, Img, RegisterContainer, TitleContainer, Title, Form, Input, ButtonContainer, Button, LoginContainer, Text, Register } from './Style.js'

export default function Login() {
    return (
        <Container>

            <LogoContainer>
                <Img src={Logo} alt="logo" />
            </LogoContainer>

            <RegisterContainer>

                <TitleContainer>
                    <Title>Cadastre-se</Title>
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

                    <Input
                        type="email"
                        placeholder="Repetir Senha"
                    />


                </Form>

                {/* <p>Esqueci minha senha</p> */}

                <ButtonContainer>
                    <Button>Avançar</Button>
                </ButtonContainer>

                <LoginContainer>
                    <Text>Não possui cadastro?</Text>
                    <Register>Cadastre-se aqui</Register>
                </LoginContainer>

            </RegisterContainer>


        </Container>
    )
}