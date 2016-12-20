import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input placeholder="Choisir une ville" className="form-control" value={this.state.term}
                       onChange={this.onInputChange}/>
                <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Rechercher</button>
            </span>
            </form>
        )
    };

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);