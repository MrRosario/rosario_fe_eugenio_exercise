import React from 'react';
import {render, screen} from '@testing-library/react';
import UserOverview from '../UserOverview';

jest.mock('react-router-dom', () => ({
    useLocation: () => ({
        state: {
            firstName: 'Test',
            lastName: 'User',
            displayName: 'userName',
            location: 'location',
        },
    }),
    useNavigate: () => ({}),
}));

describe('UserOverview', () => {
    it('should render UserOverview', () => {
        render(<UserOverview />);

        expect(screen.getByText('Test User')).toBeInTheDocument();
        expect(screen.getByText('userName')).toBeInTheDocument();
        expect(screen.getByText('location')).toBeInTheDocument();
    });
});
