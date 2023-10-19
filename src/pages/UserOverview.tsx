import * as React from 'react';
import {useLocation} from 'react-router-dom';
import {UserData} from 'types';
import Card from '../components/Card';
import {Container} from '../components/GlobalComponents';
import Header from '../components/Header';

type userTypeProps = {
    user: UserData;
};

const UserCard = ({user}: userTypeProps) => {
    const columns = [
        {
            key: 'Name',
            value: `${user.firstName} ${user.lastName}`,
        },
        {
            key: 'Display Name',
            value: user.displayName,
        },
        {
            key: 'Location',
            value: user.location,
        },
    ];
    return <Card columns={columns} hasNavigation={false} navigationProps={user} />;
};

const UserOverview = () => {
    const location = useLocation();

    return (
        <Container>
            <Header title={`User ${location.state.firstName} ${location.state.lastName}`} />
            <UserCard user={location.state} />
        </Container>
    );
};

export default UserOverview;
