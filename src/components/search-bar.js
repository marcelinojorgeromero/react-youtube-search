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
                    <input 
                        type="text" className="form-control" id="search-query-main-input" placeholder="query..."
                        value={this.state.term}
                        onChange={ event => this.onInputChange(event.target.value) } />
                    <br/>
                    { this.state.term !== "" ? <span>Your query: { this.state.term }</span> : <span></span> }
                </div>
            </form>
        );
    }
}

export default SearchBar;