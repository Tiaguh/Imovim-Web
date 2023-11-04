import React from 'react'

import { AiFillCamera } from 'react-icons/ai'

import { Container, UserInfo, PhotoContainer, UserDescribe, UserName, City, ButtonContainer, AcceptButton, DeleteButton } from './Style'

export default function Solicitation() {
    return (
        <Container>

            <UserInfo>

                <PhotoContainer>
                    <AiFillCamera color="#FFF" size={25} />
                </PhotoContainer>

                <UserDescribe>

                    <UserName>Name</UserName>
                    <City>São Paulo</City>

                </UserDescribe>

            </UserInfo>

            <ButtonContainer>
                <AcceptButton>Aceitar</AcceptButton>
                <DeleteButton>Excluir</DeleteButton>
            </ButtonContainer>

        </Container>
    )
}