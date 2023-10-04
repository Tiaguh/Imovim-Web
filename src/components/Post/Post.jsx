import React, { useState } from 'react'

import { PostContainer, HeaderPost, UserPhoto, PostInfo, DatePost, UserName, PostContent, ReactionsContainer, Reaction, LinkContainer, LikeQuantity } from './Style.js'

import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";

export default function Post() {
    const [like, setLike] = useState(false)
    const [quantity, setQuantity] = useState(0)

    console.log(quantity);

    function controlLikeQuantity() {
        if (like === false) {
            setQuantity(quantity + 1);
            setLike(true);
        } else {
            setQuantity(quantity - 1);
            setLike(false);
        }
    }

    return (
        <PostContainer>

            <HeaderPost>

                <UserPhoto />

                <PostInfo>

                    <UserName>Teste</UserName>

                    <DatePost>hh:mm .quinta 05 de out</DatePost>

                </PostInfo>

            </HeaderPost>

            <PostContent />

            <ReactionsContainer>

                <Reaction onClick={controlLikeQuantity}>
                    <BsFillHandThumbsUpFill color={like ? "#FF7926" : "#FFF"} size={25} />
                    <LinkContainer>
                        <LikeQuantity>{quantity}</LikeQuantity>
                    </LinkContainer>
                </Reaction>

                <Reaction>
                    <FaComment color="#FFF" size={25} />
                </Reaction>

                <Reaction>
                    <FaShare color="#FFF" size={25} />
                </Reaction>

            </ReactionsContainer>

        </PostContainer>

    )
}