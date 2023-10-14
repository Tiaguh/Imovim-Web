import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: #FFF
`;

export const CreatePostContainer = styled.div`
    padding-inline: 25px;
`;

export const UserInfo = styled.div`
    width: 100%;
    height: 15vh;

    display: flex;
    align-items: center;

    gap: 15px
`;

export const UserPhoto = styled.div`
    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #D9D9D9;

    border-radius: 50px;

    border: 1px #F8670E solid;
`;

export const UserName = styled.h1`
    font-family: sans-serif;
    font-size: 20px;
`;

export const PostContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
`;

export const PostContentContainer = styled.div`
    width: 35%;
        
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    
    gap: 25px;
`

export const PostContent = styled.div`
    width: 100%;
    height: 250px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #D9D9D9
`;

export const PostDescribe = styled.input`
    width: 100%;
    
    font-size: 18px;
    font-family: sans-serif;
    font-weight: bold;
    color: #000;

    padding: 5px;

    border: none;

    border-bottom: 2px solid #D9D9D9;

    outline: 0;
`;

export const DescribeLengthContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: flex-end;    

    padding-inline: 5px;
`

export const DescribeLength = styled.h1`
    font-family: sans-serif;
    font-size: 16px;
`;

export const Button = styled.button`
    width: 200px;
    height: 50px;

    font-size: 18px;
    font-weight: bold;
    color: #FFF;

    background-color: #F8670E;

    border: none;
    border-radius: 25px;
`