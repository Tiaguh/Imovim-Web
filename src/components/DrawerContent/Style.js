import styled from 'styled-components'

export const DrawerContainer = styled.div`
    width: 250px;
    height: 100vh;
    
    background-color: #F8670E;

    position: fixed;
`;

export const CloseDrawer = styled.div`
    width: 100%;
    height: 10vh;    

    display: flex;
    align-items: center;

    padding-inline: 25px; 
`;

export const UserContainer = styled.div`
    width: 100%;
    height: 25vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 15px;
`;

export const UserPhoto = styled.div`
    width: 100px;
    height: 100px;

    background-color: #D9D9D9;

    border-radius: 200px;
`;

export const UserName = styled.h1`
    font-family: sans-serif;
    font-size: 19px;
    color: #FFF
`;

export const NavigationContainer = styled.div`
    width: 100%;
    height: 55vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 10px;
`;

export const Navigation = styled.button`
    width: 100%;
    height: 42px;

    display: flex;
    align-items: center;
    
    padding: 15px;

    background-color: #CB5106;

    border-radius: 10px;

    gap: 10px;

    cursor: pointer;

    border: none;
`;

export const TextNavigation = styled.div`
    font-family: sans-serif;
    font-size: 18px;
    color: #FFF
`;

export const ExitContainer = styled.div`
    width: 100%;
    height: 10vh;

    display: flex;
    align-items: center;

    padding-inline: 10px;
`;

export const ExitButton = styled.button`
    width: 100%;
    height: 42px;

    display: flex;
    align-items: center;
    
    padding: 15px;

    background-color: #8B04A2;

    border-radius: 10px;

    gap: 10px;

    cursor: pointer;

    border: none;
`