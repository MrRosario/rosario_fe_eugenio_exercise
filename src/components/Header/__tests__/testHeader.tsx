import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Header from '..';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

describe('Header', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it('should render header', () => {
        render(<Header title="Header" />);

        expect(screen.getByText('Header')).toBeInTheDocument();
    });

    it('should render back button in header', () => {
        render(<Header title="Header" showBackButton />);

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should not render back button in header', () => {
        render(<Header title="Header" showBackButton={false} />);

        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('should navigate back when back button is clicked', () => {
        render(<Header title="Header" showBackButton />);

        fireEvent.click(screen.getByRole('button'));

        expect(mockUseNavigate).toHaveBeenCalled();
    });
});
