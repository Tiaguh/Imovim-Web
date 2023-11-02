import React from 'react'

import { AiFillCamera } from 'react-icons/ai'

import { Container, PhotoContainer, UserName, Action } from './Style'

export default function Followed() {
    return (
        <Container>

            <PhotoContainer>
                <AiFillCamera color="#FFF" size={25} />
            </PhotoContainer>

            <UserName>Name</UserName>
            <Action>comment in your post</Action>

        </Container>
    )
}