import React, { useState } from 'react'

import Header from '../../components/Header/Header';

import { Container, NotificationsContainer, TitleContainer, Title, OptionsNotifications, Option, TypeNotifications } from './Style'

import Followed from '../../components/PublicationNotification/PublicationNotification';
import Solicitation from '../../components/SolicitationNotification/SolicitationNotification';

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
                                <Solicitation />
                            </div>
                        ) : (
                            <div>
                                <Followed />
                            </div>
                        )
                    }



                </TypeNotifications>

            </NotificationsContainer>

        </Container >
    )
}