import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: #FFF
`;

export const NotificationsContainer = styled.div`
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

export const OptionsNotifications = styled.div`
    width: 100%;
    height: 15vh;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 35px
`;

export const Option = styled.button`
    width: 200px;
    height: 50px;

    border: none;

    border-radius: 25px;

    font-size: 16px;
    font-weight: normal;
    color: #000;

    background-color: ${props => props.active ? '#F1F1F1' : '#E1E1E1'};
`
