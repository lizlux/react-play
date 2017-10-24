import React, {Component} from 'react';
import PropTypes from 'prop-types';
import YouTubeAutocomplete from './plugin';

export default class YoutubeAutoComplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            results: []
        }
    }

    _buttonClicked = (event) => {
        console.log('clicked');
        event.preventDefault();

        this.setState({
            value: '',
            results: []
        });
    };

    _onChange = (event) => {
        console.log('on change fired');
        const value = event.target.value;
        this.setState({
            value
        });
    };

    _onSearchResultsFound = (results) => {
        this.setState({
            results
        })
    };

    _renderResults = () => {
        console.log(this.state.results);
        const body = this.state.results.map((result) => {
            return (
                <div key={result.id.videoId}>{result.snippet.title}</div>
            )
        });
        return (
            <div className='results'>
                {body}
            </div>
        );
    };

    render() {
        return (
            <div>
                Hi from autocomplete!
                <button
                    onClick={this._buttonClicked}
                >
                    Click me!
                </button>
                <YouTubeAutocomplete
                    apiKey="AIzaSyADd6e9KkT2xal9TlPWAmU3UmuRG_po1h0"
                    placeHolder="Search Youtube"
                    callback={this._onSearchResultsFound}
                    inputValue={this.state.value}
                    onChange={this._onChange}
                />
                <div>
                    {this._renderResults()}
                </div>
            </div>
        );
    }
}