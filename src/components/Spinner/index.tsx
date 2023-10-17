import * as React from 'react';
import styled, {keyframes} from 'styled-components';

const spinnerAnimation = keyframes`
from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const SpinnerBody = styled.div`
    height: 4rem;
    width: 4rem;
    border: 4px solid #d1d5db;
    border-top-color: #3b82f6;
    border-radius: 50%;
    animation: ${spinnerAnimation} 800ms linear infinite;
`;

export const Spinner = () => {
    return <SpinnerBody data-testid="spinner" />;
};
