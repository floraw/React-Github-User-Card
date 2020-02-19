import React from 'react';

import FollowerCard from './FollowerCard';

class Followers extends React.Component {
    constructor() {
        super();
        this.state = {
            followers: []
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/users/floraw/followers')
        .then(response => response.json())
        .then(followers => this.setState({ followers }))
        .catch(error => console.log("Error: ", error))
    };

    render() {
        console.log(this.state.followers);
        return (
            <div className="follower-wrapper">
                {this.state.followers.map(follower => (
                    <FollowerCard 
                    key={follower.id}
                    img={follower.avatar_url}
                    name={follower.login}
                    />
                ))}
            </div>
        )
    }
}

export default Followers;