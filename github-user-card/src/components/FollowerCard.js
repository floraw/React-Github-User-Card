import React from 'react';

const FollowerCard = (props) => {
    return (
        <div>
            <img src={props.img} alt={props.name}/>
            <h3>{props.name}</h3>
        </div>
    )
}

export default FollowerCard;