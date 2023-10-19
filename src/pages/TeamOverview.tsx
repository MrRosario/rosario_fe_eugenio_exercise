import React, {useState, useEffect} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {UserData} from 'types';
import {userList} from 'utils';
import {getTeamOverview, getUserData} from '../api';
import {Container} from '../components/GlobalComponents';
import Card from '../components/Card';
import Header from '../components/Header';
import List from '../components/List';

type teamLeadProps = {
    tlead: UserData;
};

const TeamLeadCard = ({tlead}: teamLeadProps) => {
    const columns = [
        {
            key: 'Team Lead',
            value: '',
        },
        {
            key: 'Name',
            value: `${tlead.firstName} ${tlead.lastName}`,
        },
        {
            key: 'Display Name',
            value: tlead.displayName,
        },
        {
            key: 'Location',
            value: tlead.location,
        },
    ];
    return <Card columns={columns} url={`/user/${tlead.id}`} navigationProps={tlead} />;
};

interface PageState {
    teamLead?: UserData;
    teamMembers?: UserData[];
}

const TeamOverview = () => {
    const location = useLocation();
    const {teamId} = useParams();
    const [pageData, setPageData] = useState<PageState>({});
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getTeamUsers = async () => {
            const {teamLeadId, teamMemberIds = []} = await getTeamOverview(teamId);
            const teamLead = await getUserData(teamLeadId);

            const teamMembers = [];
            for (const teamMemberId of teamMemberIds) {
                const data = await getUserData(teamMemberId);
                teamMembers.push(data);
            }
            setPageData({
                teamLead,
                teamMembers,
            });
            setIsLoading(false);
        };
        getTeamUsers();
    }, [teamId]);

    return (
        <Container>
            <Header title={`Team ${location.state.name}`} />
            {!isLoading && <TeamLeadCard tlead={pageData.teamLead} />}
            <List items={userList(pageData?.teamMembers ?? [])} isLoading={isLoading} />
        </Container>
    );
};

export default TeamOverview;
