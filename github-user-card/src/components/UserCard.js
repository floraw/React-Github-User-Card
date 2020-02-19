import React from 'react';

class UserCard extends React.Component {
    constructor() {
        super();
        this.state = {
            user: [],
            followers: []
        }
    }

    componentDidMount() {
        fetch('https://api.github.com/users/floraw')
            .then(response => response.json())
            .then(user => this.setState({ user }))
            .catch(error => console.log("Error: ", error))
    }
 
    render() {
        console.log(this.state.user)
        return (
            <div>
                <img src={this.state.user.avatar_url} alt={this.state.user.login} />
                <div>
                    <h2>{this.state.user.name}</h2>
                    <h4>{this.state.user.login}</h4>
                    <p>{this.state.user.location}</p>
                    <p>{this.state.user.bio}</p>
                </div>
            </div>
        )
    }
}

export default UserCard;