import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: auto;

    background-color: #FFF
`;

export const WallPaper = styled.div`
    width: 100%;
    height: 25vh;

    background-color: #F1F1F1
`;

export const UserContainer = styled.div`
    width: 100%;
    height: 32vh;

    display: flex;

    padding-inline: 50px;

    background-color: #FFF;
    
    border-radius: 20px;

    border-bottom: 5px solid #A312BB;
`;

export const UserInfo = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`;

export const UserPhoto = styled.button`
    width: 190px;
    height: 190px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 200px;

    border: 3px solid #FFF;

    background-color: #D9D9D9;

    margin-top: -100px;
    margin-bottom: 15px;    

    cursor: pointer;
`;

export const UserName = styled.div`
    font-family: sans-serif;
    font-size: 22px;
    font-weight: bold;
`

export const UserCity = styled.div`
    font-family: sans-serif;
    font-size: 20px;
`

export const UserActions = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    gap: 25px;
`

export const SeeFriends = styled.button`
    width: 200px;
    height: 45px;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 10px;

    background-color: #A312BB;

    border: none;
    border-radius: 25px;

    font-family: sans-serif;
    font-size: 20px;
    color: #FFF;

    cursor: pointer;
`

export const EditProfile = styled.button`
    border: none;

    background-color: transparent
`;

export const TagsContainer = styled.div`
    width: 100%;
    height: 18vh;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-inline: 50px;

    border-bottom: 2px solid #E98AF9;
`;

export const Tag = styled.button`
    width: 350px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: sans-serif;
    font-size: 18px;
    font-weight: bold;

    color: #FFF;

    border: none;
    border-radius: 25px;

    background-color: #8B8A8B;

    cursor: pointer;
`;

export const SeeMoreDesable = styled.button`
    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #F8670E;

    border: none;
    border-radius: 50px;

    cursor: pointer;
`;

export const SeeMoreActivity = styled.div`
    width: 200px;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #F8670E;

    border: none;
    border-radius: 25px;

    cursor: pointer;

    padding-inline: 5px
`;

export const Options = styled.div`
    width: 70%;

    display: flex;
    flex-direction: column;
    gap: 5px;

`

export const Option = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 5px
`;

export const Line = styled.div`
    width: 100%;
    height: 2px;

    background-color: #FFF;   
`;

export const CloseSeeMore = styled.button`
    width: 25%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    background-color: transparent;
`

export const OptionText = styled.div`
    font-family: sans-serif;
    font-size: 17px;
    color: #FFF;
`;

export const ProfileFeed = styled.div`
    width: 100%;
    height: 50vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;