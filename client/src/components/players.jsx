import React from 'react';

const Players = props => {
    return (
        <div className='player'>
            <h2>{props.player.name}</h2>
            <p>{props.player.country}</p>
            <p>Searches: {props.player.searches}</p>
        </div>
    )
}

export default Players;