import React from 'react'

import Header from '../../components/Header/Header';

import { Container, SeeMoreContainer, TitleContainer, Title, TagsContainer, PhotoContainer, Phothos, CardTitle, MyEvents, Events } from './Style'

export default function SeeMore() {
    return (
        <Container>

            <Header />

            <SeeMoreContainer>

                <TitleContainer>
                    <Title>Ver mais</Title>
                </TitleContainer>

                <TagsContainer>
                    <CardTitle>Tags</CardTitle>
                </TagsContainer>

                <PhotoContainer>
                    <CardTitle>Foto</CardTitle>

                    <Phothos></Phothos>
                </PhotoContainer>

                <MyEvents>
                    <CardTitle>Meus eventos</CardTitle>

                    <Events></Events>
                </MyEvents>

            </SeeMoreContainer>

        </Container>
    )
}