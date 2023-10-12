import React from 'react';

import { BsFillChatFill } from 'react-icons/bs'

import Header from '../../components/Header/Header'

import { Container, LogoContainer, Logo, LogoText } from './Style.js'

export default function Search() {
    return (
        <Container>
            <Header />

            <LogoContainer>
                <Logo>
                    <BsFillChatFill color="#A512BD" size={25} />

                    <LogoText>Chat</LogoText>
                </Logo>
            </LogoContainer>

        </Container>
    )
}