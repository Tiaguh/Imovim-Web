import styled from 'styled-components'

export const PostContainer = styled.div`
    width: 400px;
    height: 550px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 10px;
`;

export const PostContent = styled.div`
    width: 100%;
    height: 400px;

    background-color: #F1F1F1
`;

export const HeaderPost = styled.div`
    display: flex;
    align-items: center;

    gap: 15px
`;

export const UserPhoto = styled.div`
    width: 55px;
    height: 55px;
    
    background-color: #D9D9D9;

    border-radius: 50px
`;

export const PostInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const UserName = styled.h1`
    font-family: sans-serif;
    font-size: 20px;
`;

export const DatePost = styled.h1`
    font-family: sans-serif;
    font-size: 18px;

    color: #D9D9D9
`;

export const ReactionsContainer = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-around;
`;

export const Reaction = styled.button`
    width: 55px;
    height: 55px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: #A512BD;

    border: none;
    border-radius: 50px;

    cursor: pointer;
`;

export const LinkContainer = styled.div`
    width: 30px;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 30px;

    background-color: #D9D9D9;

    margin-bottom: -50px; 
    margin-right: -40px;

    position: absolute
`

export const LikeQuantity = styled.h1`  
    font-family: sans-serif;
    font-size: 18px;
    font-weight: bold;
`   