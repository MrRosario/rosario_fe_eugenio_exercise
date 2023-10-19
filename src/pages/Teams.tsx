import React, {useEffect, useState} from 'react';
import {Teams as TeamsList} from 'types';
import {teamsList} from 'utils';
import {getTeams as fetchTeams} from '../api';
import Header from '../components/Header';
import List from '../components/List';
import {Container} from '../components/GlobalComponents';

const Teams = () => {
    const [teams, setTeams] = useState<TeamsList[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getTeams = async () => {
            const response = await fetchTeams();
            setTeams(response);
            setIsLoading(false);
        };
        getTeams();
    }, []);

    return (
        <Container>
            <Header title="Teams" showBackButton={false} />
            <List items={teamsList(teams)} isLoading={isLoading} />
        </Container>
    );
};

export default Teams;
