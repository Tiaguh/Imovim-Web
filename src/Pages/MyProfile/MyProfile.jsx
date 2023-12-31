import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { BsFillCameraFill } from 'react-icons/bs';
import { BiSolidPencil } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';
import { IoEllipsisHorizontal, IoAddOutline } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';

import Header from '../../components/Header/Header'

import { Container, WallPaper, UserContainer, UserInfo, UserPhoto, UserName, UserCity, UserActions, SeeFriends, EditProfile, TagsContainer, Tag, SeeMoreDesable, SeeMoreActivity, ProfileFeed, Option, Line, CloseSeeMore, Options, OptionText } from './Style.js'

export default function MyProfile() {
    const [visible, setVisible] = useState(false)

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
                        <BiSolidPencil style={{ cursor: "pointer" }} color="#000" size={30} />
                    </EditProfile>

                </UserActions>

            </UserContainer>

            <TagsContainer>
                <Tag># Adicione seus esportes favoritos </Tag>

                {
                    visible ? (
                        <SeeMoreActivity>

                            <Options>

                                <Link style={{ textDecoration: "none" }} to="/tags">
                                    <Option>
                                        <BiSolidPencil style={{ cursor: "pointer" }} color="#FFF" size={30} />
                                        <OptionText>Editar Tags</OptionText>
                                    </Option>
                                </Link>

                                <Line />

                                <Link style={{ textDecoration: "none" }} to="/see-more">
                                    <Option>
                                        <IoAddOutline style={{ cursor: "pointer" }} color="#FFF" size={35} />
                                        <OptionText>Ver mais</OptionText>
                                    </Option>
                                </Link>

                            </Options>

                            <CloseSeeMore onClick={() => setVisible(false)}>
                                <AiOutlineClose style={{ cursor: "pointer" }} color="#FFF" size={30} />
                            </CloseSeeMore>

                        </SeeMoreActivity>
                    ) : (
                        <SeeMoreDesable onClick={() => setVisible(true)} >
                            <IoEllipsisHorizontal color="#FFF" size={30} />
                        </SeeMoreDesable>
                    )
                }

            </TagsContainer>

            <ProfileFeed>
                <h1 style={{fontFamily: "sans-serif", fontSize: 20}}>
                    Não há nenhuma publicação aqui
                </h1>
            </ProfileFeed>

        </Container>
    )
}