import React from 'react';

import MatchStats from './sports/MatchStats';

import './sports/sports.scss';


const Sports = () => {

    return (
        <div className='Sports'>
            <h1>Sports</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <MatchStats team1="Bolton" team2="Leyton Orient" />
        </div>
    );
};

export default Sports;