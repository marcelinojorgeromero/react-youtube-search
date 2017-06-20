import React, { Component } from 'react';

//const SearchBar = () => <input />;

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: 'hello' };
    }

    onInputChange(event) {
        this.setState({ term: event.target.value }); //event => this.setState({ term: event.target.value }) 
    }

    render() {
        return (
            <div>
                <input 
                value={this.state.term}
                onChange={ event => this.setState({ term: event.target.value }) } /><br/>
                Value of the input: { this.state.term }
            </div>
        );
    }
}

export default SearchBar;