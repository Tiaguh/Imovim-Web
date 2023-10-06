import React from 'react'

import { BsFillCameraFill } from 'react-icons/bs';
import { BiSolidPencil } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';
import { IoEllipsisHorizontal } from 'react-icons/io5';

import Header from '../../components/Header/Header'

import { Container, WallPaper, UserContainer, UserInfo, UserPhoto, UserName, UserCity, UserActions, SeeFriends, EditProfile, TagsContainer, Tag, SeeMoreButton, ProfileFeed } from './Style.js'

export default function MyProfile() {
    return (
        <Container>
            <Header />

            <WallPaper />

            <UserContainer>
                <UserInfo>

                    <UserPhoto>
                        <BsFillCameraFill color="#FFF" size={30} />
                    </UserPhoto>

                    <UserName>
                        Nome Sobrenome
                    </UserName>

                    <UserCity>
                        Cidade
                    </UserCity>
                </UserInfo>

                <UserActions>
                    <SeeFriends>
                        <FaUserAlt color="#FFF" size={25} />
                        Ver amigos
                    </SeeFriends>

                    <EditProfile>
                        <BiSolidPencil color="#000" size={30} />
                    </EditProfile>

                </UserActions>

            </UserContainer>

            <TagsContainer>
                <Tag># Adicione seus esportes favoritos </Tag>

                <SeeMoreButton>
                    <IoEllipsisHorizontal color="#FFF" size={30} />
                </SeeMoreButton>
            </TagsContainer>

            <ProfileFeed>
                Não há nenhuma publicação aqui
            </ProfileFeed>

        </Container>
    )
}