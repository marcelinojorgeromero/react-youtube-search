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
            <form>
                <div className="form-group">
                    <label>Query:</label>
                    <input 
                    type="text" className="form-control" id="search-query-main-input" placeholder="search..."
                    value={this.state.term}
                    onChange={ event => this.setState({ term: event.target.value }) } />
                    <br/>
                    Value of the input: { this.state.term }
                </div>
            </form>
        );
    }
}

export default SearchBar;