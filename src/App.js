import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import YoutubeApi from './youtube-api'
import SearchBar from './components/search-bar'
import VideoList from './components/video-list'

const API_KEY_YOUTUBE = 'AIzaSyBFRtOhA-URHZfYDwdUCklcSDredMJdHJI';


const youtubeApi = new YoutubeApi();

class App extends Component {

	constructor(props){
		super(props);

		this.state = { videos: null };

		let params = {
			key: API_KEY_YOUTUBE,
			part: 'snippet',
			term: 'surfboards',
			maxResults: 20,
			type: 'video'
		};
		youtubeApi.search(params).then(response => {
			let videos = JSON.parse(response);
			this.setState({ videos })
		});
	}

	render() {
		return (
			<div className="App">
			<div className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h2>Welcome to React</h2>
			</div>
			<p className="App-intro">
				To get started, edit <code>src/App.js</code> and save to reload.
			</p>
			<SearchBar />
			<VideoList videos={ this.state.videos } />
			</div>
		);
	}
}

export default App;
