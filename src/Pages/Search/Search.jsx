import React from 'react';

import { HiMiniMagnifyingGlass } from 'react-icons/hi2'

import Header from '../../components/Header/Header'

import { Container, SearchContainer, IconContainer, InputContainer, Input } from './Style.js'

export default function Search() {
    return (
        <Container>
            <Header />

            <InputContainer>

                <SearchContainer>

                    <IconContainer>
                        <HiMiniMagnifyingGlass color="#F8670E" size={25} />
                    </IconContainer>

                    <Input placeholder='Pesquise por amigos...' />
                </SearchContainer>

            </InputContainer>

        </Container>
    )
}