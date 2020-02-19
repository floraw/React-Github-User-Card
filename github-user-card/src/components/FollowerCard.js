import React from 'react';

const FollowerCard = (props) => {
    return (
        <div className="follower-card">
            <img src={props.img} alt={props.name}/>
            <h3><i class="fab fa-github"></i> {props.name}</h3>
        </div>
    )
}

export default FollowerCard;