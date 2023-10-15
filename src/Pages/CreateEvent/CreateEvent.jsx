import React, { useState } from 'react'

import Header from '../../components/Header/Header';

import { BsFillCameraFill } from 'react-icons/bs';
import { HiPhoto } from 'react-icons/hi2';

import { Container, CreatePostContainer, UserInfo, UserPhoto, UserName, PostContent, PostContainer, PostContentContainer, PostDescribe, DescribeLengthContainer, DescribeLength, Button } from './Style'

export default function CreateEvent() {
    const [describe, setDescribe] = useState('')

    return (
        <Container>
            <Header />

            <CreatePostContainer>

                <UserInfo>
                    <UserPhoto>
                        <BsFillCameraFill color="#FFF" size={18} />
                    </UserPhoto>
                    <UserName>Teste</UserName>
                </UserInfo>

                <PostContainer>
                    <PostContentContainer>

                        <PostContent>
                            <HiPhoto color="#FFF" size={100} />
                        </PostContent>

                        <PostDescribe
                            onChange={(e) => setDescribe(e.target.value)}
                            placeholder='Digite uma legenda...'
                            maxLength={100}
                        />

                        <DescribeLengthContainer>
                            <DescribeLength>
                                {describe.length} /100
                            </DescribeLength>
                        </DescribeLengthContainer>

                    <Button>Criar post</Button>
                    
                    </PostContentContainer>

                </PostContainer>

            </CreatePostContainer>

        </Container>
    )
}