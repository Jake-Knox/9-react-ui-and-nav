import React, { useState } from 'react';

import PropTypes from 'prop-types';

import TabSelector from './TabSelector';
import LiveReporting from './LiveReporting';
import Stats from './Stats';
import Lineups from './Lineups';

const MatchStats = ({ team1, team2 }) => {

    const [selected, setSelected] = useState('');

    const handleSelect = (sport) => {
        setSelected(sport);
    };

    const renderSelectedSportComponent = () => {
        switch (selected) {
            case 'Live Reporting':
                return <LiveReporting />;
            case 'Stats':
                return <Stats />;
            case 'Lineups':
                return <Lineups />;
            default:
                return null;
        }
    };


    return (
        <div className='MatchStats'>
            <h2>{`${team1} vs ${team2}`}</h2>
            <TabSelector onSelect={handleSelect} />
            {renderSelectedSportComponent()}

        </div>
    );
};

MatchStats.propTypes = {
    team1: PropTypes.string.isRequired,
    team2: PropTypes.string.isRequired,
};

export default MatchStats