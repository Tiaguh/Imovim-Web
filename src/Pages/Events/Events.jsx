import React from 'react';

import Header from '../../components/Header/Header'

import { Container, EventsContainer, TitleContainer, Title, Card, TextCard, ScrollContainer, EventCard } from './Style.js'

export default function Events() {
    return (
        <Container>
            <Header />

            <EventsContainer>

                <TitleContainer>
                    <Title>Eventos</Title>
                </TitleContainer>

                <Card>
                    <TextCard>Todos os eventos</TextCard>
                </Card>

                <ScrollContainer>
                    <EventCard />
                    <EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard />                    
                    <EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard />                    
                </ScrollContainer>

            </EventsContainer>

        </Container>
    )
}