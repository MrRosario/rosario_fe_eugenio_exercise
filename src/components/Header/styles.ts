import styled from 'styled-components';

export const HeaderContainer = styled.div`
    height: 100px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h1``;

export const NavigationHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BackButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    outline: 0;
`;
