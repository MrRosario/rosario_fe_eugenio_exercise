import styled from 'styled-components';

export const Container = styled.div<{hasNavigation: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background: #ddd;
    padding: 20px;
    width: 250px;
    max-height: 200px;
    cursor: ${props => (props.hasNavigation ? 'pointer' : 'default')};
    margin: 5px;
`;
