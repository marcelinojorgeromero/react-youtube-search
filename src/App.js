import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
			<div className="App container-fluid">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<div className="jumbotron">
					<h1>You can search a video from youtube</h1>
					<SearchBar onSearchTermChange={ term => this.search(term) }/>
				</div>

				<div className="row">
					<div className="col-md-8">
						<VideoDetail video={ this.state.selectedVideo } />
					</div>
					<VideoList 
						onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
						videos={ this.state.videos } />
				</div>
			</div>
		);
	}
}

export default App;
