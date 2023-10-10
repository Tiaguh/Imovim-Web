import React from 'react';

import Header from '../../components/Header/Header'

import { FaSave } from "react-icons/fa";

import { Container, TagsContainer, TitleContainer, Title, SelectTagsContainer } from './Style.js'

export default function Tags() {
    return (
        <Container>
            <Header />

            <TagsContainer>

            <TitleContainer>

                <Title>Selecione seus esportes favoritos</Title>

                <FaSave color="#F8670E" size={32} />

            </TitleContainer>

            <SelectTagsContainer>

            </SelectTagsContainer>

            </TagsContainer>

        </Container>
    )
}