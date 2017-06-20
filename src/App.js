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

		this.state = { videos: null };

		let params = {
			key: API_KEY_YOUTUBE,
			part: 'snippet',
			term: 'nyan cat',
			maxResults: 2,
			type: 'video'
		};
		youtubeApi.search(params).then(response => {
			let videos = JSON.parse(response);
			this.setState({ videos })
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
					<SearchBar />
				</div>

				<div className="row">
					<div className="col-md-8">
						<VideoDetail video={ this.state.videos ? this.state.videos.items[0] : null } />
					</div>
					<VideoList videos={ this.state.videos } />
				</div>
			</div>
		);
	}
}

export default App;
