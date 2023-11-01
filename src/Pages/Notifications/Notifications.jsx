import React, { useState } from 'react'

import Header from '../../components/Header/Header';

import { Container, NotificationsContainer, TitleContainer, Title, OptionsNotifications, Option, TypeNotifications } from './Style'

export default function Notifications() {
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

                <TypeNotifications>

                    {
                        activite ? (
                            <div>
                                <h1>requests</h1>
                            </div>
                        ) : (
                            <div>
                                <h1>publics</h1>
                            </div>
                        )
                    }



                </TypeNotifications>

            </NotificationsContainer>

        </Container >
    )
}