import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';

import YoutubeApi from './youtube-api'
import SearchBar from './components/search-bar'
import VideoList from './components/video-list'
import VideoDetail from './components/video-detail'

const API_KEY_YOUTUBE = 'AIzaSyBFRtOhA-URHZfYDwdUCklcSDredMJdHJI';


const youtubeApi = new YoutubeApi();

class App extends Component {

	constructor(props){
		super(props);

		this.state = {
			videos: null,
			selectedVideo: null,
			term: ''
		};

		this.search('nyan cat');
	}

	search(term) {
		const youTubeSearchParams = {
			key: API_KEY_YOUTUBE,
			part: 'snippet',
			term: term,
			maxResults: 20,
			type: 'video'
		};

		youtubeApi.search(youTubeSearchParams).then(response => {
			let videos = JSON.parse(response);
			this.setState({
				videos: videos,
				selectedVideo: videos.items[0],
				term: term
			});
		});
	}

	render() {
		return (
			<div className="App container">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>React App</h2>
				</div>
				<div className="jumbotron">
					<h2>Search on youtube</h2>
					<SearchBar onSearchTermChange={ _.debounce(term => this.search(term), 1000) }/>
				</div>

				<div className="row">
					<VideoDetail video={ this.state.selectedVideo } />
					<VideoList 
						onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
						videos={ this.state.videos } />
				</div>
			</div>
		);
	}
}

export default App;
