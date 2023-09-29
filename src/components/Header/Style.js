import styled from 'styled-components'

export const HeaderContainer = styled.div`
    width: 100vw;
    height: 10vh;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding-inline: 15px; 

    background-color: #A512BD
`;

export const Icon = styled.img`
    width: 25px
`;

export const StartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    left: 15px;
`;

export const CenterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const EndContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10px;

    position: absolute;
    right: 15px;
`;