import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        //this.props = props;
        this.state = { term: '' };
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label>Query:</label>
                    <input 
                        type="text" className="form-control" id="search-query-main-input" placeholder="search..."
                        value={this.state.term}
                        onChange={ event => this.onInputChange(event.target.value) } />
                    <br/>
                    Value of the input: { this.state.term }
                </div>
            </form>
        );
    }
}

export default SearchBar;