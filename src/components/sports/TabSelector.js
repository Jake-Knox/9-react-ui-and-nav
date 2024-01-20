import React, { useState } from 'react';

const TabSelector = ({ onSelect }) => {
    const [selected, setSelected] = useState('');

    const handleSelect = (sport) => {
        setSelected(sport);
        onSelect(sport);
    };

    return (
        <div className="TabSelector">
            <button onClick={() => handleSelect('Live Reporting')}>Live Reporing</button>
            <button onClick={() => handleSelect('Stats')}>Stats</button>
            <button onClick={() => handleSelect('Lineups')}>Lineups</button>
        </div>
    );
};

export default TabSelector;