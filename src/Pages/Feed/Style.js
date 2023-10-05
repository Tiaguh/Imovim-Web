import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const TopBarContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    margin-top: 20px

`;

export const TopBar = styled.div`
    width: 220px;
    height: 55px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    background-color: #f8670e;

    border-radius: 30px;

    padding: 15px;

    margin-bottom: 5px
`;

export const FeedContainer = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 25px;
`