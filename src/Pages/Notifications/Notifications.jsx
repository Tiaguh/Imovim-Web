import React, { useState } from 'react'

import Header from '../../components/Header/Header';

import { Container, NotificationsContainer, TitleContainer, Title, OptionsNotifications, Option } from './Style'

export default function Notifications(props) {
    const [activite, setActivite] = useState(false)

    return (
        <Container>
            <Header />

            <NotificationsContainer>

                <TitleContainer>
                    <Title>Notificações</Title>
                </TitleContainer>

                <OptionsNotifications>

                    <Option active={activite} onClick={() => setActivite(false)}>
                        Publicações
                    </Option>

                    <Option active={!activite} onClick={() => setActivite(true)}>
                        Solicitações
                    </Option>

                </OptionsNotifications>

            </NotificationsContainer>

        </Container>
    )
}