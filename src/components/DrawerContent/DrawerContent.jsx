import React from 'react';

import { BiSolidUser } from "react-icons/bi";
import { BsPencilFill, BsFillBellFill } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";
import { RiCloseLine } from "react-icons/ri";
import { AiFillHome, AiFillCalendar } from "react-icons/ai";

import { DrawerContainer, CloseDrawer, UserContainer, UserPhoto, UserName, NavigationContainer, Navigation, TextNavigation, ExitContainer, ExitButton } from "./Style.js"
import { Link } from 'react-router-dom';

export default function DrawerContent({ setIsOpen }) {
    return (
        <DrawerContainer>

            <CloseDrawer>

                <RiCloseLine
                    onClick={() => setIsOpen(false)}
                    size={50}
                    color="#FFF"
                    style={{ cursor: "pointer" }}
                />

            </CloseDrawer>

            <UserContainer>
                <UserPhoto />

                <UserName>Teste</UserName>

            </UserContainer>

            <NavigationContainer>

                <Navigation>

                    <AiFillHome
                        size={25}
                        color="#FFF"
                        style={{ cursor: "pointer" }}
                    />

                    <Link
                        style={{ textDecoration: "none" }}
                        to="/feed"
                    >
                        <TextNavigation>
                            Página inicial
                        </TextNavigation>
                    </Link>

                </Navigation>

                <Navigation>

                    <BiSolidUser
                        size={25}
                        color="#FFF"
                        style={{ cursor: "pointer" }}
                    />

                    <Link
                        style={{ textDecoration: "none" }}
                        to="/my-profile"
                    >
                        <TextNavigation>
                            Meu perfil
                        </TextNavigation>
                    </Link>

                </Navigation>

                <Navigation>

                    <AiFillCalendar
                        size={25}
                        color="#FFF"
                        style={{ cursor: "pointer" }}
                    />

                    <TextNavigation>
                        Eventos
                    </TextNavigation>

                </Navigation>

                <Navigation>

                    <BsPencilFill
                        size={22}
                        color="#FFF"
                        style={{ cursor: "pointer" }}
                    />

                    <TextNavigation>
                        Criar Post
                    </TextNavigation>

                </Navigation>

                <Navigation>

                    <BsFillBellFill
                        size={23}
                        color="#FFF"
                        style={{ cursor: "pointer" }}
                    />

                    <TextNavigation>
                        Notificações
                    </TextNavigation>

                </Navigation>

                <Navigation>

                    <FaGear
                        size={23}
                        color="#FFF"
                        style={{ cursor: "pointer" }}
                    />

                    <TextNavigation>
                        Configurações
                    </TextNavigation>

                </Navigation>

            </NavigationContainer>

            <ExitContainer>
                <ExitButton>
                    <TextNavigation>
                        Sair
                    </TextNavigation>
                </ExitButton>
            </ExitContainer>

        </DrawerContainer>
    )
}