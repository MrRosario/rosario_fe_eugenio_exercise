import * as React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import TeamOverview from './pages/TeamOverview';
import Teams from './pages/Teams';
import UserOverview from './pages/UserOverview';

const App = () => {
    var router = createBrowserRouter([
        {
            path: '/',
            element: <Teams />,
        },
        {
            path: '/team/:teamId',
            element: <TeamOverview />,
        },
        {
            path: '/user/:useId',
            element: <UserOverview />,
        },
    ]);
    return <RouterProvider router={router} />;
};

export default App;
