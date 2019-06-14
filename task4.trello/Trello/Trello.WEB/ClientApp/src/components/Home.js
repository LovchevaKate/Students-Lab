import React, { Component } from 'react';

export class Home extends Component {
    displayName = Home.name

    constructor(props) {
        super(props);

        this.state = { data: {}, isFetching: true, error: null };
    }

    test = () => {
        fetch('https://localhost:44342/api/UserAPI')
            .then(response => response.json())
            .then(result => this.setState({ data: result, isFetching: false }))
            .catch(e => {
                console.log(e);
                this.setState({ data: {}, isFetching: false, error: e });
            });
    
    };


    render() {
        
        const { data, isFetching, error } = this.state;

        if (isFetching) return <div>...Loading</div>;

        if (error) return <div>{`Error: ${error.message}`}</div>;

        return <h1>{data.user}</h1>;
    };
}
