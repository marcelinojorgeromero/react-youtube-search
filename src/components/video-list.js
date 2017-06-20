import React from 'react';
import VideoListItem from './video-list-item'

const VideoList = data => {
    if (!data.videos) return <div>Loading...</div>;
    const videoItems = data.videos.items.map(video => <VideoListItem key={ video.etag } video={ video } />);

    return (
        <ul className="col-md-4 list-group">
            { videoItems }
        </ul>
    );
}


export default VideoList;