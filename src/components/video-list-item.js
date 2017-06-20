import React from 'react';


const VideoListItem = video => {

    return (
        <li>
            video {Math.round(Math.random() * 100 + 1)}
        </li>
    );
};

export default VideoListItem;