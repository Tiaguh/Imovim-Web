import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: #FFF
`;

export const EventsContainer = styled.div`
    width: 100%;

    padding-inline: 25px
`;

export const TitleContainer = styled.div`
    width: 100%;
    height: 15vh;

    display: flex;
    align-items: center;
`;

export const Title = styled.h1`
    font-family: sans-serif;
    font-size: 20px;
`;

export const Card = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;

    background-color: #F1F1F1;

    border-radius: 15px;

    padding-inline: 20px
`;

export const TextCard = styled.h2`
    font-family: sans-serif;
    font-size: 18px;
    font-weight: bold;
`;

export const ScrollContainer = styled.div`
    width: 100%;
    height: 240px;

    padding-top: 15px;
    padding-bottom: 15px;

    overflow-x: scroll;
    white-space: nowrap;
`;

export const EventCard = styled.div`
    width: 350px;
    height: 180px;

    background-color: darkgray;

    display: inline-block;
    margin-right: 10px;
    
    border-radius: 15px;
`